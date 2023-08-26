// НАВИГАЦИЯ
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Navigation.css";

function Navigation({ isLoggedIn, isLanding }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleMenuOpen() {
    setIsOpenMenu(true);
  }

  function handleMenuClose() {
    setIsOpenMenu(false);
  }

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
                className={({ isActive }) => `
                  navigation__link
                  navigation__link_type_films
                  ${isLanding ? "navigation__link_type_landing" : ""}
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
                  ${isLanding ? "navigation__link_type_landing" : ""}
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
              ${isLanding ? "navigation__burger_type_landing" : ""}
              button
            `}
            type="button"
            aria-label="кнопка открытия меню"
            onClick={handleMenuOpen}
          />
          <Menu isOpen={isOpenMenu} onClose={handleMenuClose} />
        </>
      )}
    </nav>
  );
}

export default Navigation;
