// СТРАНИЦА С СОХРАНЕННЫМИ ФИЛЬМАМИ
import { useState } from "react";
import useMoviesFilter from "../../hooks/useMoviesFilter";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({ isSavedMovies, savedMovies, onDelete }) {
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
    // находим фильмы по запросу среди сохраненных фильмов
    const filteredMovies = filterSearchedMovies(savedMovies, searchText);
    // если ничего не найдено
    if (!filteredMovies.length) {
      // появляется надпись
      setError("Ничего не найдено");
    // если есть результат
    } else {
      // сохраняем найденные фильмы в стейт-переменную
      setSearchedMovies(filteredMovies);
    }
  }

  function handleFilterShortMovies() {
    // включаем фильтр
    if (isShortMovies === false) {
      // изменяем состояние переключателя
      setIsShortMovies(true);
      if (searchedMovies.length) {
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
        }
      } else {
        // находим короткометражки среди сохраненных фильмов
        const filteredMovies = filterShortMovies(savedMovies);
        // если ничего не найдено
        if (!filteredMovies.length) {
          // появляется надпись
          setError("Ничего не найдено");
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
      // очищаем ошибки (на случай, если возникали)
      setError("");
    }
  }

  function handleDeleteMovie(card) {
    onDelete(card._id);
  };

  function renderMovies() {
    if (searchedMovies.length) {
      return searchedMovies;
    } else if (shortMovies.length) {
      return shortMovies;
    }
    return savedMovies;
  } 

  return (
    <main className="main">
      <SearchForm
        isSavedMovies={isSavedMovies}
        onSubmit={handleFilterSearchedMovies}
        onCheckboxChange={handleFilterShortMovies}
        isShortMoviesChecked={isShortMovies}
      />
      {!error && (savedMovies.length > 0 || searchedMovies.length > 0 || shortMovies.length > 0) && (
        <MoviesCardList
          isSavedMovies={isSavedMovies}
          cards={renderMovies()}
          onClick={handleDeleteMovie}
        />
      )}
      {/* если ничего не найдено появляется соответствующая надпись */}
      {error && <p className="request-error">{error}</p>}
    </main>
  );
}

export default SavedMovies;
