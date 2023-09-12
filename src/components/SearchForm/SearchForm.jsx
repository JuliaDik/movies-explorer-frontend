// ФОРМА ПОИСКА
import { useEffect } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ isMovies, onSubmit, onCheckboxChange, isShortMoviesChecked }) {
  const { values, setValues, errors, setErrors, isValid, handleChange } =
    useFormAndValidation({
      searchText: "",
    });

  function handleSubmit(evt) {
    evt.preventDefault();
    // после сабмита формы поиска производится валидация
    // если запрос пустой
    if (!isValid || values.searchText === "") {
      // появляется ошибка
      setErrors({ searchText: "Нужно ввести ключевое слово" });
    // если что-то введено
    } else {
      // осуществляется запрос к API на поиск
      onSubmit(values.searchText);
    }
  }

  useEffect(() => {
    // если пользователь повторно переходит на страницу "Фильмы",
    if (isMovies) {
      // достаем текст запроса из локального хранилища браузера
      setValues({ searchText: localStorage.getItem("searchText") });
    }
  }, [isMovies, setValues]);

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
            className="search__input"
            type="text"
            name="searchText"
            placeholder="Фильм"
            autoComplete="off"
            value={values.searchText || ""}
            onChange={handleChange}
          />
          <span className="search__error-message">{errors.searchText}</span>
          <button
            className="search__submit-button button"
            type="submit"
          ></button>
        </form>
        <FilterCheckbox
          onChange={onCheckboxChange}
          isChecked={isShortMoviesChecked}
        />
      </div>
    </section>
  );
}

export default SearchForm;
