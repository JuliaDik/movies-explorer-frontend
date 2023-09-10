function useMoviesFilter() {
  // найти те, которые в своих названиях
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

  // найти те, длительность которых не превышает 40 минут
  const filterShortMovies = (movies) => {
    const shortMovies = movies.filter(({ duration }) => {
      return duration <= 40;
    });
    return shortMovies;
  };

  return { filterSearchedMovies, filterShortMovies };
}

export default useMoviesFilter;
