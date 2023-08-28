// РЕГИСТРАЦИЯ
import { NavLink } from "react-router-dom";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Register.css";

function Register({ onRegister }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      onRegister(values.name, values.email, values.password);
    }
  }

  return (
    <main className="register">
      <div className="register__content">
        <NavLink className="register__logo button" to="/" />
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <Form
          location="register"
          onSubmit={handleSubmit}
        >
          <div className="register__inputs">
            <Input
              location="register"
              label="Имя"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              value={values.name || ""}
              errorMessage={errors.name}
              handleChange={handleChange}
            />
            <Input
              location="register"
              label="Email"
              name="email"
              type="email"
              value={values.email || ""}
              errorMessage={errors.email}
              handleChange={handleChange}
            />
            <Input
              location="register"
              label="Пароль"
              name="password"
              type="password"
              value={values.password || ""}
              errorMessage={errors.password}
              handleChange={handleChange}
            />
          </div>
          <SubmitButton
            location="register"
            text="Зарегистрироваться"
            // errorMessage
            isValid={isValid}
          />
        </Form>
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
