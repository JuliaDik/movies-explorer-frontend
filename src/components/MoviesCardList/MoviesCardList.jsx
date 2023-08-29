// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК С ФИЛЬМАМИ
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import { movies } from "../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList() {
  const location = useLocation();
  const [initialCards, setInitialCards] = useState(Number);
  const [moreCards, setMoreCards] = useState(Number);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // для тестирования отображения карточек и кнопки еще
  useEffect(() => {
    if (windowWidth > 768) {
      setInitialCards(16);
      setMoreCards(4);
    }

    if (windowWidth <= 768 && windowWidth > 320) {
      setInitialCards(8);
      setMoreCards(2);
    }

    if (windowWidth <= 320) {
      setInitialCards(5);
      setMoreCards(1);
    }

    if (windowWidth > 320 && location.pathname === "/saved-movies") {
      setInitialCards(3);
    }

    if (windowWidth <= 320 && location.pathname === "/saved-movies") {
      setInitialCards(2);
    }

    function handleUpdateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleUpdateWindowWidth);
    return () => window.removeEventListener("resize", handleUpdateWindowWidth);
  }, [windowWidth, location.pathname, setWindowWidth]);

  function handleAddMoreCards() {
    setInitialCards(initialCards + moreCards);
  }

  return (
    <section className={`
        movies
        ${location.pathname === "/saved-movies" ? "movies_type_saved" : ""}
      `}
      aria-label="фильмы"
    >
      <div className="movies__container">
        <ul className="movies__list">
          {movies.slice(0, initialCards).map((movie) => (
            <MoviesCard card={movie} key={movie.id} />
          ))}
        </ul>
        <button
          className={`
            movies__add-button
            button
            ${
              movies.length < initialCards ||
              location.pathname === "/saved-movies"
                ? "movies__add-button_hidden"
                : ""
            }
          `}
          type="button"
          onClick={handleAddMoreCards}
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
