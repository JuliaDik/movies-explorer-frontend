// СТРАНИЦА С ПОИСКОМ ФИЛЬМОВ И БЛОКОМ РЕЗУЛЬТАТА
import { useState, useEffect } from "react";
import useMoviesFilter from "../../hooks/useMoviesFilter";
import moviesApi from "../../utils/MoviesApi";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {
  ERROR_GET_MOVIES,
  ERROR_NOT_FOUND_MOVIES,
} from "../../utils/constants";
import "./Movies.css";

function Movies({
  savedMovies,
  isMoviesPage,
  isSavedMoviesPage,
  onSave,
  onDelete,
}) {
  const { filterSearchedMovies, filterShortMovies } = useMoviesFilter();
  // все фильмы
  const [allMovies, setAllMovies] = useState([]);
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
    // если запрос к серверу осуществляется впервые
    if (!allMovies.length) {
      // осуществляем запрос к серверу
      moviesApi
        // на получение всех фильмов
        .getMovies()
        .then((allMovies) => {
          setAllMovies(allMovies);
          // получив все фильмы, осуществляем поиск на стороне клиента
          handleFilterSearchedMovies(allMovies, searchText);
        })
        .catch((err) => {
          // если в процессе получения и обработки данных происходит ошибка
          // в окне результатов выводится ошибка
          setError(ERROR_GET_MOVIES);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
      setIsLoading(true);
      // очищаем ошибку
      setError("");
    // если запросы вторичные
    } else {
      // осуществляем поиск по всем фильмам, хранящимся в стейт-переменной
      handleFilterSearchedMovies(allMovies, searchText);
    }
  }

  function handleFilterSearchedMovies(allMovies, searchText) {
    // очищаем уведомление
    setError("");

    // ПОИСК СРЕДИ КОРОТКОМЕТРАЖЕК

    if (shortMovies.length > 0) {
      // находим фильмы по запросу среди короткометражек
      const filteredMovies = filterSearchedMovies(shortMovies, searchText);
      // если ничего не найдено
      if (filteredMovies.length === 0) {
        // появляется уведомление
        setError(ERROR_NOT_FOUND_MOVIES);
        // данные не сохраняем
        // после перезагрузки страницы отображается предыдущий запрос
      // если есть результат
      } else {
        // сохраняем короткометражки в стейт-переменную
        setShortMovies(filteredMovies);
        // сохраняем короткометражки в локальном хранилище
        localStorage.setItem("shortMovies", JSON.stringify(filteredMovies));
        // сохраняем текст запроса в локальном хранилище
        localStorage.setItem("searchText", searchText);
      }

    // ПОИСК СРЕДИ ВСЕХ ФИЛЬМОВ ИЗ БД
    } else {
      // находим фильмы по запросу среди всех фильмов, полученных из БД beatfilms
      const filteredMovies = filterSearchedMovies(allMovies, searchText);
      // если ничего не найдено
      if (filteredMovies.length === 0) {
        // появляется уведомление
        setError(ERROR_NOT_FOUND_MOVIES);
        // данные не сохраняем
        // после перезагрузки страницы отображается предыдущий запрос
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
  }

  function handleFilterShortMovies() {
    // включаем фильтр
    if (isShortMovies === false) {
      // изменяем состояние переключателя
      setIsShortMovies(true);
      // находим короткометражки среди найденных фильмов
      const filteredMovies = filterShortMovies(searchedMovies);
      // если ничего не найдено
      if (filteredMovies.length === 0) {
        // появляется уведомление
        setError(ERROR_NOT_FOUND_MOVIES);
        // данные не сохраняем
        // после перезагрузки страницы отображается предыдущий запрос
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
      // очищаем уведомление
      setError("");
    }
  }

  // результаты выполненного запроса отображаются
  // даже после перезагрузки страницы или закрытия вкладки
  useEffect(() => {
    // если пользователь повторно переходит на страницу "Фильмы"
    if (isMoviesPage) {
      // найденные фильмы, короткометражки, состояние переключателя достаем из локального хранилища
      // если локальное хранилище будет очищено, тогда устанавливаем дефолтные значения
      setSearchedMovies(JSON.parse(localStorage.getItem("searchedMovies")) ?? []);
      setShortMovies(JSON.parse(localStorage.getItem("shortMovies")) ?? []);
      setIsShortMovies(localStorage.getItem("isChecked") ?? false);
    }
  }, [isMoviesPage]);

  function handleClickMovie(card) {
    const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
    if (savedMovie) {
      onDelete(savedMovie._id);
      return;
    }
    onSave(card);
  }

  function renderMovies() {
    if (shortMovies.length > 0) {
      return shortMovies;
    } else {
      return searchedMovies;
    }
  }

  return (
    <main className="main">
      <SearchForm
        isMoviesPage={isMoviesPage}
        onSubmit={handleSearchMovies}
        onCheckboxChange={handleFilterShortMovies}
        isShortMoviesChecked={isShortMovies}
      />
      {/* до получения данных отрисовывается прелоадер */}
      {isLoading && <Preloader />}
      {/* после получения данных появляются карточки фильмов */}
      {!isLoading && !error && (searchedMovies.length > 0 || shortMovies.length > 0) && (
        <MoviesCardList
          cards={renderMovies()}
          savedMovies={savedMovies}
          isMoviesPage={isMoviesPage}
          isSavedMoviesPage={isSavedMoviesPage}
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
