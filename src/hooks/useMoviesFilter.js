import { DURATION_SHORT_MOVIES } from "../utils/constants";

function useMoviesFilter() {
  // найти те фильмы, которые в своих названиях
  // на русском и английском языках содержат текст запроса
  const filterSearchedMovies = (movies, searchText) => {
    const searchedMovies = movies.filter(({ nameRU, nameEN }) => {
      return (
        nameRU.toLowerCase().includes(searchText.toLowerCase()) ||
        nameEN.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    return searchedMovies;
  };

  // найти те фильмы, длительность которых не превышает 40 минут
  const filterShortMovies = (movies) => {
    const shortMovies = movies.filter(({ duration }) => {
      return duration <= DURATION_SHORT_MOVIES;
    });
    return shortMovies;
  };

  return { filterSearchedMovies, filterShortMovies };
}

export default useMoviesFilter;
