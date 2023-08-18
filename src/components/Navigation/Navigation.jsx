// НАВИГАЦИЯ
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ loggedIn }) {
  return (
    loggedIn ?
    <>
      <nav className="navigation__nav">
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
          to="/movies"
        >
          Фильмы
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `navigation__link ${isActive ? "navigation__link_active" : ""}`
          }
          to="/saved-movies"
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
      <div className="navigation__user-box">
        <NavLink
          className="navigation__link navigation__link_type_profile"
          to="/profile"
        >
          Аккаунт
        </NavLink>
      </div>
    </>
    :
    <div className="navigation__user-box">
      <NavLink
        className="navigation__link navigation__link_type_register"
        to="/signup"
      >
        Регистрация
      </NavLink>
      <NavLink
        className="navigation__link navigation__link_type_login"
        to="/signin"
      >
        Войти
      </NavLink>
    </div>
  );
}

export default Navigation;
