// АВТОРИЗАЦИЯ
import { NavLink } from "react-router-dom";
import "./Login.css";

function Login({ onLogin }) {

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin();
  }

  return (
    <section className="login" aria-label="страница регистрации пользователя">
      <div className="login__container">
        <NavLink className="login__logo" to="/" />
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label">
            <span className="login__placeholder">E-mail</span>
            <input className="login__input" reguired />
            <span className="login__error-message"></span>
          </label>
          <label className="login__label">
            <span className="login__placeholder">Пароль</span>
            <input className="login__input" reguired />
            <span className="login__error-message"></span>
          </label>
          <button className="login__button">Войти</button>
        </form>
        <p className="login__question">
          Ещё не зарегистрированы?
          <NavLink className="login__link" to="/signup">
            Регистрация
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Login;
