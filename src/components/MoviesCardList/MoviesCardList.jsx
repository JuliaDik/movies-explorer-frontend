// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК С ФИЛЬМАМИ
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  VIEWPORT_EXTRA_LARGE,
  VIEWPORT_LARGE,
  VIEWPORT_MEDIUM,
  INITIAL_CARDS_EXTRA_LARGE,
  INITIAL_CARDS_LARGE,
  INITIAL_CARDS_MEDIUM,
  INITIAL_CARDS_SMALL,
  MORE_CARDS_EXTRA_LARGE,
  MORE_CARDS_LARGE,
  MORE_CARDS_MEDIUM,
  MORE_CARDS_SMALL,
} from "../../utils/constants";
import "./MoviesCardList.css";

function MoviesCardList({
  cards,
  savedMovies,
  isMoviesPage,
  isSavedMoviesPage,
  onClick,
}) {
  const [initialCards, setInitialCards] = useState(0);
  const [moreCards, setMoreCards] = useState(0);
  const [start, setStart] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.screen.width);

  // отрисовка изначального блока карточек в зависимости от массива карточек
  // массив карточек обновляется каждый раз при сабмите поиска
  useEffect(() => {
    setStart(0);
  }, [cards]);

  // отрисовка карточек в зависимости от ширины экрана
  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth >= VIEWPORT_EXTRA_LARGE) {
      setInitialCards(INITIAL_CARDS_EXTRA_LARGE);
      setMoreCards(MORE_CARDS_EXTRA_LARGE);
    } else if (windowWidth >= VIEWPORT_LARGE) {
      setInitialCards(INITIAL_CARDS_LARGE);
      setMoreCards(MORE_CARDS_LARGE);
    } else if (windowWidth >= VIEWPORT_MEDIUM) {
      setInitialCards(INITIAL_CARDS_MEDIUM);
      setMoreCards(MORE_CARDS_MEDIUM);
    } else if (windowWidth < VIEWPORT_MEDIUM) {
      setInitialCards(INITIAL_CARDS_SMALL);
      setMoreCards(MORE_CARDS_SMALL);
    }

    function handleUpdateWindowWidth() {
      setWindowWidth(window.screen.width);
    }

    window.addEventListener("resize", handleUpdateWindowWidth);
    return () => window.removeEventListener("resize", handleUpdateWindowWidth);
  }, [windowWidth, setWindowWidth]);

  function handleAddMoreCards() {
    setStart(start + 1);
    console.log(start);
  }

  return (
    <section
      className={`
        movies
        ${isSavedMoviesPage ? "movies_type_saved" : ""}
      `}
      aria-label="фильмы"
    >
      <div className="movies__container">
        <ul className="movies__list">
          {isSavedMoviesPage
            ? cards.map((card) => (
                <MoviesCard
                  card={card}
                  key={card._id}
                  savedMovies={savedMovies}
                  isMoviesPage={isMoviesPage}
                  isSavedMoviesPage={isSavedMoviesPage}
                  onClick={onClick}
                />
              ))
            : cards
                .slice(0, initialCards + start * moreCards)
                .map((card) => (
                  <MoviesCard
                    card={card}
                    key={card.id}
                    savedMovies={savedMovies}
                    isMoviesPage={isMoviesPage}
                    isSavedMoviesPage={isSavedMoviesPage}
                    onClick={onClick}
                  />
                ))}
        </ul>
        <button
          className={`
            movies__add-button
            button
            ${
              cards.length <= initialCards || isSavedMoviesPage
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
