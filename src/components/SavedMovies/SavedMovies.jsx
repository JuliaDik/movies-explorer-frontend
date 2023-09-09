// СТРАНИЦА С СОХРАНЕННЫМИ ФИЛЬМАМИ
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useMoviesFilter from "../../hooks/useMoviesFilter";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({ savedMovies, onDeleteMovie}) {
  const { filterRequestedMovies, filterShortMovies } = useMoviesFilter();
  const location = useLocation();
  // фильмы, найденные по тексту запроса
  const [searchedSavedMovies, setSearchedSavedMovies] = useState([]);
  // короткометражки, отобранные среди найденных фильмов
  const [shortMovies, setShortMovies] = useState([]);
  // состояние переключателя короткометражек
  const [isShortMovies, setIsShortMovies] = useState(false);
  // сообщение об ошибке
  const [error, setError] = useState("");

  function handleDeleteMovie({ _id: movieId }) {
    onDeleteMovie(movieId);
  };

  function handleSearchSavedMovies(searchTextSavedMovies) {
    // находим те фильмы, которые совпадают с текстом запроса
    const requestedSavedMovies = filterRequestedMovies(
      savedMovies,
      searchTextSavedMovies
    );
    // сохраняем найденные фильмы в стейт-переменной
    setSearchedSavedMovies(requestedSavedMovies);
    // сохраняем найденные фильмы в локальном хранилище браузера
    localStorage.setItem("searchedSavedMovies", JSON.stringify(requestedSavedMovies));
    if (!requestedSavedMovies.length) {
      // то показываем ошибку
      setError("Ничего не найдено");
    }
  }

  function handleFilterShortMovies() {
    // изменяем состояние переключателя при нажатии
    setIsShortMovies(!isShortMovies);
    // если включаем фильтр
    if (isShortMovies === false) {
      // то сохраняем состояние переключателя в локальном хранилище
      localStorage.setItem("isCheckedSavedMovie", isShortMovies);
      // выбираем короткометражки из сохраненных фильмов
      const shortMovies = filterShortMovies(savedMovies);
      // сохраняем их в стейт-переменную
      setShortMovies(shortMovies);
      // сохраняем их в локальном хранилище
      localStorage.setItem("shortSavedMovies", JSON.stringify(shortMovies));
    // если выключаем фильтр
    } else {
      setIsShortMovies(!isShortMovies);
      setShortMovies([]);
      // удаляем из локального хранилища состояние переключателя
      localStorage.removeItem("isCheckedSavedMovie");
      // и короткометражки
      localStorage.removeItem("shortSavedMovies");
    }
  }

  useEffect(() => {
    if (location.pathname === "/movies") {
      setSearchedSavedMovies(
        JSON.parse(localStorage.getItem("searchedSavedMovies")) ?? []
      );
      setIsShortMovies(localStorage.getItem("isCheckedSavedMovie") ?? false);
      setShortMovies(JSON.parse(localStorage.getItem("shortSavedMovies")) ?? []);
    }
  }, [location.pathname]);

  return (
    <main className="main">
      <SearchForm
        onSubmit={handleSearchSavedMovies}
        onCheckboxChange={handleFilterShortMovies}
        isShortMoviesChecked={isShortMovies}
      />
      {!error && (
        <MoviesCardList
          cards={(searchedSavedMovies.length) ? searchedSavedMovies : (shortMovies.length) ? shortMovies : savedMovies}
          onClick={handleDeleteMovie}
        />
      )}
      {/* если ничего не найдено или в процессе получения и обработки данных происходит ошибка,
      появляется соответствующая надпись */}
      {error && <p className="request-error">{error}</p>}
    </main>
  );
}

export default SavedMovies;
