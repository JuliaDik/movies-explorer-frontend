// РЕГИСТРАЦИЯ
import { NavLink } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <section
      className="register"
      aria-label="страница регистрации пользователя"
    >
      <div className="register__container">
        <NavLink className="register__logo" to="/" />
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label">
            <span className="register__placeholder">Имя</span>
            <input
              className="register__input"
              minlength="2"
              maxlength="30"
              reguired
            />
            <span className="register__error-message"></span>
          </label>
          <label className="register__label">
            <span className="register__placeholder">E-mail</span>
            <input className="register__input" reguired />
            <span className="register__error-message"></span>
          </label>
          <label className="register__label">
            <span className="register__placeholder">Пароль</span>
            <input className="register__input" reguired />
            <span className="register__error-message">
              Что-то пошло не так...
            </span>
          </label>
          <button className="register__button">Зарегистрироваться</button>
        </form>
        <p className="register__question">
          Уже зарегистрированы?
          <NavLink className="register__link" to="/signin">
            Войти
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;
