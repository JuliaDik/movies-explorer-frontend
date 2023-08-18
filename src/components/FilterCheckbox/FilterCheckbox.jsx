// ЧЕКБОКС/ПЕРЕКЛЮЧАТЕЛЬ КОРОТКОМЕТРАЖЕК
import "./FilterCheckbox.css";
import { useState } from "react";

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className="filter" aria-label="чекбокс короткометражек">
      <label className="filter__label">
        <input
          className="filter__invisible-checkbox"
          type="checkbox"
          onChange={handleToggleCheckbox}
        />
        <span
          className={`filter__visible-checkbox ${
            isChecked ? "filter__visible-checkbox_checked" : ""
          }`}
        ></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </section>
  );
}

export default FilterCheckbox;
