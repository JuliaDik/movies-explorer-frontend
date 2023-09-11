// РЕГИСТРАЦИЯ
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Auth from "../Auth/Auth";
import AuthForm from "../AuthForm/AuthForm";
import AuthInput from "../AuthInput/AuthInput";
import AuthSubmitButton from "../AuthSubmitButton/AuthSubmitButton";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/constants";
import "./Register.css";

function Register({ error, onRegister }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    // если валидация прошла успешна
    if (isValid) {
      // отправляем запрос к API на создание нового пользователя
      onRegister(values.name, values.email, values.password);
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
          pattern={NAME_REGEX}
          value={values.name || ""}
          errorMessage={errors.name}
          onChange={handleChange}
        />
        <AuthInput
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="my_email@gmail.com"
          pattern={EMAIL_REGEX}
          value={values.email || ""}
          errorMessage={errors.email}
          onChange={handleChange}
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
        />
        <AuthSubmitButton
          form="register"
          errorMessage={error}
          text="Зарегистрироваться"
          isValid={isValid}
        />
      </AuthForm>
    </Auth>
  );
}

export default Register;
