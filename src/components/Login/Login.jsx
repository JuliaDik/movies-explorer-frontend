// АВТОРИЗАЦИЯ
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Auth from "../Auth/Auth";
import AuthForm from "../AuthForm/AuthForm";
import AuthInput from "../AuthInput/AuthInput";
import AuthSubmitButton from "../AuthSubmitButton/AuthSubmitButton";
import { EMAIL_REGEX } from "../../utils/constants";
import "./Login.css";

function Login({ onLogin, error }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    // если валидация прошла успешна
    if (isValid) {
      // отправляем запрос к API на авторизацию пользователя
      onLogin(values.email, values.password);
    }
  }

  return (
    <Auth
      greeting="Рады видеть!"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      route="/signup"
    >
      <AuthForm
        name="login"
        onSubmit={handleSubmit}
      >
        <AuthInput
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
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
          placeholder="Пароль"
          value={values.password || ""}
          errorMessage={errors.password}
          onChange={handleChange}
        />
        <AuthSubmitButton
          form="login"
          errorMessage={error}
          text="Войти"
          isValid={isValid}
        />
      </AuthForm>
    </Auth>
  );
}

export default Login;
