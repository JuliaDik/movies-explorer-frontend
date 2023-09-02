// СТРАНИЦА С ПОИСКОМ ФИЛЬМОВ
// SearchForm — форма поиска
// Preloader — анимация загрузки (появляется в момент ожидания ответа от API)
// MoviesCardList — контейнер для карточек с фильмами
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies({ movies, onSubmit }) {
  return (
    <main className="main">
      <SearchForm
        onSubmit={onSubmit}
      />
      {/* <Preloader /> */}
      <MoviesCardList movies={movies} />
    </main>
  );
}

export default Movies;
