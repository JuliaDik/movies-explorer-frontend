// НАВИГАЦИЯ
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, isLanding }) {
  return (
    <nav className="navigation__nav">
      <NavLink
        className="
          navigation__link
          navigation__link_type_logo
          button
        "
        to="/"
      ></NavLink>
      {!isLoggedIn ? (
        <div className="navigation__auth">
          <NavLink
            className="
            navigation__link
            navigation__link_type_register
            link
          "
            to="/signup"
          >
            Регистрация
          </NavLink>
          <NavLink
            className="
            navigation__link
            navigation__link_type_login
            button
          "
            to="/signin"
          >
            Войти
          </NavLink>
        </div>
      ) : (
        <>
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                className={({ isActive }) =>
                  `navigation__link
                  navigation__link_type_films
                  ${isLanding ? "navigation__link_type_landing" : ""}
                  ${isActive ? "navigation__link_active" : ""}
                  link`
                }
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={({ isActive }) =>
                  `navigation__link
                  navigation__link_type_films
                  ${isLanding ? "navigation__link_type_landing" : ""}
                  ${isActive ? "navigation__link_active" : ""}
                  link`
                }
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
          <NavLink
            className="
            navigation__link
            navigation__link_type_profile
            button
          "
            to="/profile"
          >
            Аккаунт
          </NavLink>
        </>
      )}
    </nav>
  );
}

export default Navigation;
