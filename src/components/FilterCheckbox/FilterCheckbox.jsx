// ЧЕКБОКС "КОРОТКОМЕТРАЖКИ" (фильтр поиска фильмов)
import { useState } from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleCheckbox() {
    setIsChecked(!isChecked);
  };

  return (
    <div className="filter">
      <label className="filter__label">
        <input
          className="filter__invisible-checkbox"
          type="checkbox"
          onChange={handleToggleCheckbox}
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
