// ЧЕКБОКС/ПЕРЕКЛЮЧАТЕЛЬ КОРОТКОМЕТРАЖЕК
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <section className="filter" aria-label="чекбокс короткометражек">
      <label className="filter__label">
        <input className="filter__invisible-checkbox" type="checkbox" />
        <span className="filter__visible-checkbox"></span>
        <span className="filter__text">Короткометражки</span>
      </label>
    </section>
  );
}

export default FilterCheckbox;