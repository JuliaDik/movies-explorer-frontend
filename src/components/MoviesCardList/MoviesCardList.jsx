// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК С ФИЛЬМАМИ
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import {
  WIDTH_FOR_16_CARDS,
  WIDTH_FOR_9_CARDS,
  WIDTH_FOR_8_CARDS,
  WIDTH_FOR_5_CARDS,
  INITIAL_CARDS_WIDTH_1280,
  INITIAL_CARDS_WIDTH_990,
  INITIAL_CARDS_WIDTH_617,
  INITIAL_CARDS_WIDTH_616,
  MORE_CARDS_WIDTH_1280,
  MORE_CARDS_WIDTH_990,
  MORE_CARDS_WIDTH_617,
  MORE_CARDS_WIDTH_616,
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // отрисовка изначального блока карточек в зависимости от массива карточек
  // массив карточек обновляется каждый раз при сабмите поиска
  useEffect(() => {
    setStart(0);
  }, [cards]);

  // отрисовка карточек в зависимости от ширины экрана
  useEffect(() => {
    if (windowWidth >= WIDTH_FOR_16_CARDS) {
      setInitialCards(INITIAL_CARDS_WIDTH_1280);
      setMoreCards(MORE_CARDS_WIDTH_1280);
    } else if (windowWidth >= WIDTH_FOR_9_CARDS) {
      setInitialCards(INITIAL_CARDS_WIDTH_990);
      setMoreCards(MORE_CARDS_WIDTH_990);
    } else if (windowWidth >= WIDTH_FOR_8_CARDS) {
      setInitialCards(INITIAL_CARDS_WIDTH_617);
      setMoreCards(MORE_CARDS_WIDTH_617);
    } else if (windowWidth < WIDTH_FOR_5_CARDS) {
      setInitialCards(INITIAL_CARDS_WIDTH_616);
      setMoreCards(MORE_CARDS_WIDTH_616);
    }

    function handleUpdateWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleUpdateWindowWidth);
    return () => window.removeEventListener("resize", handleUpdateWindowWidth);
  }, [windowWidth, setWindowWidth]);

  function handleAddMoreCards() {
    setStart(start + 1);
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
