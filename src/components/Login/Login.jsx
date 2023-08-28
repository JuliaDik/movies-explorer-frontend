// АВТОРИЗАЦИЯ
import { NavLink } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Login.css";

function Login({ onLogin }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      onLogin(values.email, values.password);
    }
  }

  return (
    <main className="login">
      <div className="login__content">
        <NavLink className="login__logo button" to="/" />
        <h2 className="login__greeting">Рады видеть!</h2>
        <Form
          location="login"
          onSubmit={handleSubmit}
        >
          <div className="login__inputs">
            <Input
              location="login"
              label="Email"
              name="email"
              type="email"
              value={values.email || ""}
              errorMessage={errors.email}
              handleChange={handleChange}
            />
            <Input
              location="login"
              label="Пароль"
              name="password"
              type="password"
              value={values.password || ""}
              errorMessage={errors.password}
              handleChange={handleChange}
            />
          </div>
          <SubmitButton
            location="login"
            text="Войти"
            // errorMessage
            isValid={isValid}
          />
        </Form>
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
