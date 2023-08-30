// ФОРМА ПОИСКА
import useFormAndValidation from "../../hooks/useFormAndValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    search: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      onSubmit(values.search);
    }
  }

  return (
    <section className="search" aria-label="форма поиска">
      <div className="search__container">
        <form
          className="search__form"
          name="search"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className={`
              search__input
              ${errors.search ? `search__input_type_error` : ""}
            `}
            type="text"
            name="search"
            placeholder="Фильм"
            autoComplete="off"
            required
            value={values.search || ""}
            errorMessage={errors.search}
            onChange={handleChange}
          />
          <span className="search__error-message">
            {errors.search}
          </span>
          <button
            className="search__submit-button button"
            type="submit"
            isValid={true}
          ></button>
        </form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
