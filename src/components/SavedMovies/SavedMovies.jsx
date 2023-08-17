// СТРАНИЦА С СОХРАНЕННЫМИ ФИЛЬМАМИ
// SearchForm — форма поиска
// FilterCheckbox - фильтр с чекбоксом "Короткометражки"
// Preloader — прелоадер (появляется в момент ожидания ответа от API)
// MoviesCardList — отрисовка всех карточек с фильмами
// MoviesCard — одна карточка фильма
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList />
    </>
  );
}

export default SavedMovies;