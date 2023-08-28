// РЕГИСТРАЦИЯ
import { NavLink } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.css";

function Register({ onRegister }) {
  return (
    <main className="register">
      <div className="register__content">
        <NavLink className="register__logo button" to="/" />
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <AuthForm
          formType="register"
          textButton="Зарегистрироваться"
          onSubmit={onRegister}
        />
        <p className="register__question">
          Уже зарегистрированы? {""}
          <NavLink className="register__link link" to="/signin">
            Войти
          </NavLink>
        </p>
      </div>
    </main>
  );
}

export default Register;
