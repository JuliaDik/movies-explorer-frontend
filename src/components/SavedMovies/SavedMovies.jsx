// СТРАНИЦА С СОХРАНЕННЫМИ ФИЛЬМАМИ
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMoviesFilter from "../../hooks/useMoviesFilter";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({ savedMovies, onDelete }) {
  const { filterRequestedMovies, filterShortMovies } = useMoviesFilter();
  const location = useLocation();
  // фильмы, найденные по тексту запроса
  const [searchedMovies, setSearchedMovies] = useState([]);
  // короткометражки, отобранные среди найденных фильмов
  const [shortMovies, setShortMovies] = useState([]);
  // состояние переключателя короткометражек
  const [isShortMovies, setIsShortMovies] = useState(false);
  // состояние загрузки данных
  const [isLoading, setIsLoading] = useState(false);
  // сообщение об ошибке
  const [error, setError] = useState("");

  function handleSearchMovies(searchText) {
    try {
      setIsLoading(true);
      // находим те, которые совпадают с текстом запроса
      const requestedMovies = filterRequestedMovies(savedMovies, searchText);
      // сохраняем найденные фильмы в стейт-переменной
      setSearchedMovies(requestedMovies);
      // сохраняем найденные фильмы в локальном хранилище браузера
      localStorage.setItem("searchedMovies", JSON.stringify(requestedMovies));
      // сохраняем текст запроса в локальном хранилище браузера
      localStorage.setItem("searchText", searchText);
      // если ничего не найдено
      if (!requestedMovies.length) {
        // то показываем ошибку
        setError("Ничего не найдено");
      }
    } catch (err) {
      setError(
        `Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз`
      );
      console.log(err);
      setIsLoading(false);
    }
  }

  function handleFilterShortMovies() {
    // изменяем состояние переключателя при нажатии
    setIsShortMovies(!isShortMovies);
    // если включаем фильтр
    if (isShortMovies === false) {
      // то сохраняем состояние переключателя в локальном хранилище
      localStorage.setItem("isChecked", isShortMovies);
      // выбираем короткометражки из ранее найденных фильмов
      const shortMovies = filterShortMovies(searchedMovies);
      // сохраняем их в стейт-переменную
      setShortMovies(shortMovies);
      // сохраняем их в локальном хранилище
      localStorage.setItem("shortMovies", JSON.stringify(shortMovies));
      // если выключаем фильтр
    } else {
      // удаляем из локального хранилища состояние переключателя
      localStorage.removeItem("isChecked");
      // и короткометражки
      localStorage.removeItem("shortMovies");
    }
  }

  useEffect(() => {
    // если пользователь повторно переходит на страницу фильмов,
    if (location.pathname === "/saved-movies") {
      // то при монтировании компонентов достаем из локального хранилища браузера
      // найденные фильмы, короткометражки, состояние переключателя
      // если локальное хранилище будет очищено, тогда устанавливаем дефолтные значения
      setSearchedMovies(
        JSON.parse(localStorage.getItem("searchedMovies")) ?? []
      );
      setIsShortMovies(localStorage.getItem("isChecked") ?? false);
      setShortMovies(JSON.parse(localStorage.getItem("shortMovies")) ?? []);
    }
  }, [location.pathname]);

  return (
    <main className="main">
      <SearchForm
        onSubmit={handleSearchMovies}
        onCheckboxChange={handleFilterShortMovies}
        isShortMoviesChecked={isShortMovies}
      />
      {/* до получения данных отрисовывается прелоадер */}
      {isLoading && <Preloader />}
      {/* после получения данных появляются карточки фильмов */}
      {!isLoading && searchedMovies.length > 0 && !error && (
        // карточки фильмов отрисовываются в зависимости от состояния переключателя
        <MoviesCardList
          cards={isShortMovies ? shortMovies : savedMovies}
          onDelete={onDelete}
        />
      )}
      {/* если ничего не найдено или в процессе получения и обработки данных происходит ошибка,
      появляется соответствующая надпись */}
      {error && <p className="request-error">{error}</p>}
    </main>
  );
}

export default SavedMovies;
