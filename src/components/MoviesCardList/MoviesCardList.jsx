// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК С ФИЛЬМАМИ
import MoviesCard from "../MoviesCard/MoviesCard";
import Container from "../Container/Container";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <section className="movies" aria-label="фильмы">
      <Container>
        <ul className="movies__list">
          <MoviesCard />
        </ul>
        <button className="movies__button button" type="button" aria-label="добавить">
          Ещё
        </button>
      </Container>
    </section>
  );
}

export default MoviesCardList;
