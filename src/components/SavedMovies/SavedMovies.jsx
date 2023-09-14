// СТРАНИЦА С СОХРАНЕННЫМИ ФИЛЬМАМИ
import { useState } from "react";
import useMoviesFilter from "../../hooks/useMoviesFilter";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { ERROR_NOT_FOUND_MOVIES } from "../../utils/constants";
import "./SavedMovies.css";

function SavedMovies({ savedMovies, isSavedMoviesPage, onDelete }) {
  const { filterSearchedMovies, filterShortMovies } = useMoviesFilter();
  // найденные фильмы
  const [searchedMovies, setSearchedMovies] = useState([]);
  // короткометражки
  const [shortMovies, setShortMovies] = useState([]);
  // состояние переключателя короткометражек
  const [isShortMovies, setIsShortMovies] = useState(false);
  // сообщение об ошибке
  const [error, setError] = useState("");

  function handleFilterSearchedMovies(searchText) {
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
      }

    // ПОИСК СРЕДИ ВСЕХ СОХРАНЕННЫХ
    } else {
      console.log(searchText);
      // находим фильмы по запросу среди всех сохраненных фильмов
      const filteredMovies = filterSearchedMovies(savedMovies, searchText);
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
      }
    }
  }

  function handleFilterShortMovies() {
    // включаем фильтр
    if (isShortMovies === false) {
      // изменяем состояние переключателя
      setIsShortMovies(true);

      // ФИЛЬТР СРЕДИ НАЙДЕННЫХ

      if (searchedMovies.length > 0) {
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
        }

      // ФИЛЬТР СРЕДИ СОХРАНЕННЫХ
      } else {
        // находим короткометражки среди сохраненных фильмов
        const filteredMovies = filterShortMovies(savedMovies);
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
        }
      }
    // выключаем фильтр
    } else {
      // изменяем состояние переключателя
      setIsShortMovies(false);
      // удаляем короткометражки из стейт-переменной
      setShortMovies([]);
      // очищаем уведомление
      setError("");
    }
  }

  function handleDeleteMovie(card) {
    if (shortMovies.length > 0) {
      setShortMovies((shortMovies) =>
        shortMovies.filter((shortMovie) => shortMovie._id !== card._id)
      );
    } else if (searchedMovies.length > 0) {
      setSearchedMovies((searchedMovies) =>
        searchedMovies.filter((searchedMovie) => searchedMovie._id !== card._id)
      );
    }
    onDelete(card._id);
  }

  function renderMovies() {
    if (shortMovies.length > 0) {
      return shortMovies;
    } else if (searchedMovies.length > 0) {
      return searchedMovies;
    } else {
      return savedMovies;
    }
  }

  return (
    <main className="main">
      <SearchForm
        onSubmit={handleFilterSearchedMovies}
        onCheckboxChange={handleFilterShortMovies}
        isShortMoviesChecked={isShortMovies}
      />
      {!error && (savedMovies.length > 0 || searchedMovies.length > 0 || shortMovies.length > 0) && (
        <MoviesCardList
          cards={renderMovies()}
          isSavedMoviesPage={isSavedMoviesPage}
          onClick={handleDeleteMovie}
        />
      )}
      {/* если ничего не найдено появляется соответствующая надпись */}
      {error && <p className="request-error">{error}</p>}
    </main>
  );
}

export default SavedMovies;
