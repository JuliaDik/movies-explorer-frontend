// СТРАНИЦА С ПОИСКОМ ФИЛЬМОВ И БЛОКОМ РЕЗУЛЬТАТА
import { useState, useEffect } from "react";
import useMoviesFilter from "../../hooks/useMoviesFilter";
import moviesApi from "../../utils/MoviesApi";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies({ isMovies, savedMovies, onSave, onDelete }) {
  const { filterSearchedMovies, filterShortMovies } = useMoviesFilter();
  // найденные фильмы
  const [searchedMovies, setSearchedMovies] = useState([]);
  // короткометражки
  const [shortMovies, setShortMovies] = useState([]);
  // состояние переключателя короткометражек
  const [isShortMovies, setIsShortMovies] = useState(false);
  // состояние загрузки данных
  const [isLoading, setIsLoading] = useState(false);
  // сообщение об ошибке
  const [error, setError] = useState("");

  function handleSearchMovies(searchText) {
    // осуществляем запрос к серверу 
    moviesApi
      // на получение всех фильмов
      .getMovies()
      .then((allMovies) => {
        // получив все фильмы, осуществляем поиск на строне клиента
        handleFilterSearchedMovies(allMovies, searchText);
      })
      .catch((err) => {
        // если в процессе получения и обработки данных происходит ошибка
        // в окне результатов выводится надпись
        setError(
          `Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз`
        );
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
    // очищаем ошибки (на случай, если возникали)
    setError("");
  }

  function handleFilterSearchedMovies(allMovies, searchText) {
    // находим фильмы по запросу среди всех фильмов, полученных из БД beatfilms
    const filteredMovies = filterSearchedMovies(allMovies, searchText);
    // если ничего не найдено
    if (!filteredMovies.length) {
      // появляется надпись
      setError("Ничего не найдено");
    // если есть результат
    } else {
      // сохраняем найденные фильмы в стейт-переменную
      setSearchedMovies(filteredMovies);
      // сохраняем найденные фильмы в локальном хранилище
      localStorage.setItem("searchedMovies", JSON.stringify(filteredMovies));
      // сохраняем текст запроса в локальном хранилище
      localStorage.setItem("searchText", searchText);
    }
  }

  function handleFilterShortMovies() {
    // включаем фильтр
    if (isShortMovies === false) {
      // изменяем состояние переключателя
      setIsShortMovies(true);
      // находим короткометражки среди найденных фильмов
      const filteredMovies = filterShortMovies(searchedMovies);
      // если ничего не найдено
      if (!filteredMovies.length) {
        // появляется надпись
        setError("Ничего не найдено");
      // если есть результат
      } else {
        // сохраняем короткометражки в стейт-переменную
        setShortMovies(filteredMovies);
        // сохраняем короткометражки в локальном хранилище
        localStorage.setItem("shortMovies", JSON.stringify(filteredMovies));
        // сохраняем состояние переключателя в локальном хранилище
        localStorage.setItem("isChecked", isShortMovies);
      }
    // выключаем фильтр
    } else {
      // изменяем состояние переключателя
      setIsShortMovies(false);
      // удаляем короткометражки из стейт-переменной
      setShortMovies([]);
      // удаляем короткометражки из локального хранилища
      localStorage.removeItem("shortMovies");
      // удаляем состояние переключателя из локального хранилища
      localStorage.removeItem("isChecked");
      // очищаем ошибки (на случай, если возникали)
      setError("");
    }
  }

  // результаты выполненного запроса отображаются
  // даже после перезагрузки страницы или закрытия вкладки
  useEffect(() => {
    // если пользователь повторно переходит на страницу "Фильмы"
    if (isMovies) {
      // найденные фильмы, короткометражки, состояние переключателя достаем из локального хранилища 
      // если локальное хранилище будет очищено, тогда устанавливаем дефолтные значения
      setSearchedMovies(JSON.parse(localStorage.getItem("searchedMovies")) ?? []);
      setShortMovies(JSON.parse(localStorage.getItem("shortMovies")) ?? []);
      setIsShortMovies(localStorage.getItem("isChecked") ?? false);
    }
  }, [isMovies]);

  function handleClickMovie(card) {
    const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    if (savedMovie) {
      onDelete(savedMovie._id);
      return;
    }
    onSave(card);
  };

  function renderMovies() {
    if (shortMovies.length) {
      return shortMovies;
    }
    return searchedMovies;
  }

  return (
    <main className="main">
      <SearchForm
        isMovies={isMovies}
        onSubmit={handleSearchMovies}
        onCheckboxChange={handleFilterShortMovies}
        isShortMoviesChecked={isShortMovies}
      />
      {/* до получения данных отрисовывается прелоадер */}
      {isLoading && <Preloader />}
      {/* после получения данных появляются карточки фильмов */}
      {!isLoading && (searchedMovies.length > 0 || shortMovies.length > 0) && !error && (
        <MoviesCardList
          isMovies={isMovies}
          cards={renderMovies()}
          savedMovies={savedMovies}
          onClick={handleClickMovie}
        />
      )}
      {/* если ничего не найдено или в процессе получения и обработки данных происходит ошибка,
      появляется соответствующая надпись */}
      {error && <p className="request-error">{error}</p>}
    </main>
  );
}

export default Movies;