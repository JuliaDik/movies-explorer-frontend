// ФОРМА ПОИСКА
import Container from "../Container/Container";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search" aria-label="форма поиска">
      <Container>
        <form className="search__form">
          <input className="search__input" placeholder="Фильм" />
          <button className="search__button"></button>
        </form>
      </Container>
    </section>
  );
}

export default SearchForm;
