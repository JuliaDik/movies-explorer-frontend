// ЧЕКБОКС "КОРОТКОМЕТРАЖКИ" (фильтр)
import "./FilterCheckbox.css";

function FilterCheckbox({ onChange, isChecked }) {
  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__invisible-checkbox"
          type="checkbox"
          onChange={onChange}
        />
        <span
          className={
            `filter__visible-checkbox
            ${isChecked ? "filter__visible-checkbox_checked" : ""}
            button`
          }
        ></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </div>
  );
}

export default FilterCheckbox;
