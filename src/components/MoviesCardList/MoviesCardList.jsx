// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК С ФИЛЬМАМИ
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <section className="movies" aria-label="фильмы">
      <div className="movies__container">
        <ul className="movies__list">
          <MoviesCard />
        </ul>
        <button
          className="movies__button button"
          type="button"
          aria-label="добавить"
        >
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
