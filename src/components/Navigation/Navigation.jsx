// НАВИГАЦИЯ
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Navigation.css";

function Navigation({ isLoggedIn }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="navigation">
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
                className={({ isActive }) => `
                  navigation__link
                  navigation__link_type_films
                  ${location.pathname === "/" ? "navigation__link_type_landing" : ""}
                  ${isActive ? "navigation__link_active" : ""}
                  link
                `}
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={({ isActive }) => `
                  navigation__link
                  navigation__link_type_films
                  ${location.pathname === "/" ? "navigation__link_type_landing" : ""}
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
            navigation__link
            navigation__link_type_profile
            button
          "
            to="/profile"
          >
            Аккаунт
          </NavLink>
          <button
            className={`
              navigation__burger
              ${location.pathname === "/" ? "navigation__burger_type_landing" : ""}
              button
            `}
            type="button"
            onClick={handleMenu}
          />
          <Menu isOpen={isMenuOpen} onClose={handleMenu} />
        </>
      )}
    </nav>
  );
}

export default Navigation;
