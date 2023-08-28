// АВТОРИЗАЦИЯ
import { NavLink } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "./Login.css";

function Login({ onLogin }) {
  return (
    <main className="login">
      <div className="login__content">
        <NavLink className="login__logo button" to="/" />
        <h2 className="login__greeting">Рады видеть!</h2>
        <AuthForm
          formType="login"
          textButton="Войти"
          onSubmit={onLogin}
        />
        <p className="login__question">
          Ещё не зарегистрированы? {""}
          <NavLink className="login__link link" to="/signup">
            Регистрация
          </NavLink>
        </p>
      </div>
    </main>
  );
}

export default Login;
