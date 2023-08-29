// ФОРМА ПОИСКА
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
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
        <Form location="search" onSubmit={handleSubmit}>
          <Input
            location="search"
            placeholder="Фильм"
            name="search"
            type="text"
            value={values.search || ""}
            errorMessage={errors.search}
            handleChange={handleChange}
          />
          <SubmitButton
            location="search"
            // errorMessage
            isValid={true}
          />
        </Form>
        <FilterCheckbox />
      </div>
    </section>
  );
}

export default SearchForm;
