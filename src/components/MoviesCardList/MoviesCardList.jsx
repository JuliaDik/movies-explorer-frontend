// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК С ФИЛЬМАМИ
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({ isMovies, isSavedMovies, cards, savedMovies, onClick }) {
  const [initialCards, setInitialCards] = useState(0);
  const [moreCards, setMoreCards] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setInitialCards(16);
      setMoreCards(4);
    } else if (windowWidth >= 990) {
      setInitialCards(9);
      setMoreCards(3);
    } else if (windowWidth >= 617) {
      setInitialCards(8);
      setMoreCards(2);
    } else if (windowWidth < 616) {
      setInitialCards(5);
      setMoreCards(2);
    }
  }, [windowWidth]);

  useEffect(() => {
    function handleUpdateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleUpdateWindowWidth);
    return () => window.removeEventListener("resize", handleUpdateWindowWidth);
  }, [setWindowWidth]);

  function handleAddMoreCards() {
    setInitialCards(initialCards + moreCards);
  }

  return (
    <section
      className={`
        movies
        ${isSavedMovies ? "movies_type_saved" : ""}
      `}
      aria-label="фильмы"
    >
      <div className="movies__container">
        <ul className="movies__list">
          {cards.slice(0, initialCards).map((card) => (
            <MoviesCard
              isMovies={isMovies}
              isSavedMovies={isSavedMovies}
              card={card}
              key={isSavedMovies ? card._id : card.id}
              savedMovies={savedMovies}
              onClick={onClick}
            />
          ))}
        </ul>
        <button
          className={`
            movies__add-button
            button
            ${
              cards.length < initialCards ||
              isSavedMovies
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