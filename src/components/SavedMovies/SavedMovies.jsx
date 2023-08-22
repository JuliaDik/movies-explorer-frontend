// СТРАНИЦА С СОХРАНЕННЫМИ ФИЛЬМАМИ
// SearchForm — форма поиска
// FilterCheckbox - фильтр с чекбоксом "Короткометражки"
// Preloader — прелоадер (появляется в момент ожидания ответа от API)
// MoviesCardList — контейнер для карточек с фильмами
import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
// import Preloader from '../Preloader/Preloader';
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <FilterCheckbox />
      {/* <Preloader /> */}
      <MoviesCardList />
    </main>
  );
}

export default SavedMovies;