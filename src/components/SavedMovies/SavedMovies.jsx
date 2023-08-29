// СТРАНИЦА С СОХРАНЕННЫМИ ФИЛЬМАМИ
// SearchForm — форма поиска
// Preloader — анимация загрузки (появляется в момент ожидания ответа от API)
// MoviesCardList — контейнер для карточек с фильмами
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <main className="main">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;
