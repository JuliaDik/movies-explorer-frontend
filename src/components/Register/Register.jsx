// РЕГИСТРАЦИЯ
import { useState } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Auth from "../Auth/Auth";
import AuthForm from "../AuthForm/AuthForm";
import AuthInput from "../AuthInput/AuthInput";
import AuthSubmitButton from "../AuthSubmitButton/AuthSubmitButton";
import { REGEX_NAME, REGEX_EMAIL } from "../../utils/constants";
import "./Register.css";

function Register({ error, isSubmitted, setIsSubmitted, onRegister }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    name: "",
    email: "",
    password: "",
  });
  const disabledButton = !isValid || isSubmitted;
  const disabledInput = isSubmitted;

  function handleSubmit(evt) {
    evt.preventDefault();
    // если валидация прошла успешна
    if (isValid) {
      // отправляем запрос к API на создание нового пользователя
      onRegister(values.name, values.email, values.password);
      // блокируем кнопку и поля
      setIsSubmitted(true);
    }
  }

  return (
    <Auth
      greeting="Добро пожаловать!"
      question="Уже зарегистрированы?"
      link="Войти"
      route="/signin"
    >
      <AuthForm
        name="registration"
        onSubmit={handleSubmit}
      >
        <AuthInput
          id="name"
          type="text"
          name="name"
          label="Имя"
          placeholder="Иван Иванов"
          minLength="2"
          maxLength="30"
          pattern={REGEX_NAME}
          value={values.name || ""}
          errorMessage={errors.name}
          onChange={handleChange}
          disabled={disabledInput}
        />
        <AuthInput
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="my_email@gmail.com"
          pattern={REGEX_EMAIL}
          value={values.email || ""}
          errorMessage={errors.email}
          onChange={handleChange}
          disabled={disabledInput}
        />
        <AuthInput
          id="password"
          type="password"
          name="password"
          label="Пароль"
          placeholder="******"
          value={values.password || ""}
          errorMessage={errors.password}
          onChange={handleChange}
          disabled={disabledInput}
        />
        <AuthSubmitButton
          form="register"
          errorMessage={error}
          text="Зарегистрироваться"
          disabled={disabledButton}
        />
      </AuthForm>
    </Auth>
  );
}

export default Register;
