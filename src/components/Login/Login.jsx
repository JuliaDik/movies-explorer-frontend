// АВТОРИЗАЦИЯ
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin();
  }

  return (
    <main className="login">
      <div className="login__content">
        <NavLink className="login__logo button" to="/" />
        <h2 className="login__greeting">Рады видеть!</h2>
        <form
          className="login__form"
          name="login"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile__inputs">
            <div className="login__field">
              <label className="login__label" for="email">
                E-mail
              </label>
              <input
                className="login__input"
                id="email"
                type="email"
                name="email"
                autoComplete="off"
                reguired
              />
              <span className="login__error-message">
                Что-то пошло не так...
              </span>
            </div>
            <div className="login__field">
              <label className="login__label" for="password">
                Пароль
              </label>
              <input
                className="login__input"
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                reguired
              />
              <span className="login__error-message">
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <button
            className="login__button button"
            type="submit"
            aria-label="войти в систему"
          >
            Войти
          </button>
        </form>
        <p className="login__question">
          Ещё не зарегистрированы?
          <NavLink className="login__link link" to="/signup">
            Регистрация
          </NavLink>
        </p>
      </div>
    </main>
  );
}

export default Login;
