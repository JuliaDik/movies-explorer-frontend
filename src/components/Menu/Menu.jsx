// МЕНЮ-БУРГЕР
import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "menu_opened" : ""}`}>
      <div className={`menu__container ${isOpen ? "menu__container_opened" : ""}`}>
        <button
          className="menu__close-button button"
          type="button"
          onClick={onClose}
        />
        <ul className="menu__list">
          <li className="menu__item">
            <NavLink
              className={({ isActive }) => `
                  menu__link
                  ${isActive ? "menu__link_active" : ""}
                  link
                `}
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className={({ isActive }) => `
                  menu__link
                  ${isActive ? "menu__link_active" : ""}
                  link
                `}
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink
              className={({ isActive }) => `
                  menu__link
                  ${isActive ? "navigation__link_active" : ""}
                  link
                `}
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          className="
            menu__link
            menu__link_type_profile
            button
          "
          to="/profile"
        >
          Аккаунт
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
