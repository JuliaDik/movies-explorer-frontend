// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК С ФИЛЬМАМИ
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from "../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList({ savedMoviesPage }) {
  const [renderedCardsCount, setRenderedCardsCount] = useState(Number);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth > 1280 || (windowWidth <= 1280 && windowWidth > 768)) {
      setRenderedCardsCount(16);
    }

    if (windowWidth <= 768 && windowWidth > 320) {
      setRenderedCardsCount(8);
    }

    if (windowWidth <= 320) {
      setRenderedCardsCount(5);
    }
    
    if (windowWidth > 320 && savedMoviesPage) {
      setRenderedCardsCount(3);
    }

    if (windowWidth <= 320 && savedMoviesPage) {
      setRenderedCardsCount(2);
    }
  }, [windowWidth, savedMoviesPage]);

  useEffect(() => {
    function handleUpdateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleUpdateWindowWidth);
    return () => window.removeEventListener("resize", handleUpdateWindowWidth);
  }, [setWindowWidth]);

  return (
    <section
      className={`movies ${savedMoviesPage ? "movies_type_saved" : ""}`}
      aria-label="фильмы"
    >
      <div className="movies__container">
        <ul className="movies__list">
          {movies.slice(0, renderedCardsCount).map((movie) => (
            <MoviesCard card={movie} key={movie.id} />
          ))}
        </ul>
        <button
          className={`
            movies__button button
            ${
              ((movies.length - 1) < renderedCardsCount) || savedMoviesPage
                ? "movies__button_hidden"
                : ""
            }
          `}
          type="button"
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
