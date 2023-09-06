function useMoviesFilter() {
  // среди фильмов найти те,
  // которые в своих названиях на русском и английском
  // содержат текст запроса
  const filterRequestedMovies = (movies, queryText) => {
    const requestedMovies = movies.filter(({ nameRU, nameEN }) => {
      return (
        nameRU.toLowerCase().includes(queryText.toLowerCase()) ||
        nameEN.toLowerCase().includes(queryText.toLowerCase())
      );
    });
    return requestedMovies;
  };

  // среди фильмов найти те,
  // длительность которых не превышает 40 минут
  const filterShortMovies = (movies) => {
    const shortMovies = movies.filter(({ duration }) => {
      return duration <= 40;
    });
    return shortMovies;
  };

  return { filterRequestedMovies, filterShortMovies };
}

export default useMoviesFilter;
