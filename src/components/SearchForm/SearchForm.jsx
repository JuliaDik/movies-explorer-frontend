// ФОРМА ПОИСКА
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search" aria-label="форма поиска">
      <div className="search__container">
        <form className="search__form" name="search" noValidate>
          <input
            className="search__input"
            type="text"
            name="search"
            placeholder="Фильм"
            autoComplete="off"
            required
          />
          <button
            className="search__button button"
            type="submit"
            aria-label="поиск"
          ></button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
