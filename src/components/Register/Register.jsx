// РЕГИСТРАЦИЯ
import { NavLink } from "react-router-dom";
import "./Register.css";

function Register({ onRegister }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister();
  }

  return (
    <main className="register">
      <div className="register__content">
        <NavLink className="register__logo button" to="/" />
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <form
          className="register__form"
          name="register"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile__inputs">
            <div className="register__field">
              <label className="register__label" for="name">
                Имя
              </label>
              <input
                className="register__input"
                id="name"
                type="text"
                name="name"
                minlength="2"
                maxlength="30"
                autoComplete="off"
                reguired
              />
              <span className="register__error-message">
                Что-то пошло не так...
              </span>
            </div>
            <div className="register__field">
              <label className="register__label" for="email">
                E-mail
              </label>
              <input
                className="register__input"
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                reguired
              />
              <span className="register__error-message">
                Что-то пошло не так...
              </span>
            </div>
            <div className="register__field">
              <label className="register__label" for="password">
                Пароль
              </label>
              <input
                className="register__input"
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                reguired
              />
              <span className="register__error-message">
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <button
            className="register__button button"
            type="submit"
            aria-label="зарегистрироваться"
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="register__question">
          Уже зарегистрированы?
          <NavLink className="register__link link" to="/signin">
            Войти
          </NavLink>
        </p>
      </div>
    </main>
  );
}

export default Register;
