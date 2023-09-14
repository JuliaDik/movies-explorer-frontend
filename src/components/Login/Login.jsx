// АВТОРИЗАЦИЯ
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Auth from "../Auth/Auth";
import AuthForm from "../AuthForm/AuthForm";
import AuthInput from "../AuthInput/AuthInput";
import AuthSubmitButton from "../AuthSubmitButton/AuthSubmitButton";
import { REGEX_EMAIL } from "../../utils/constants";
import "./Login.css";

function Login({
  errorMessage,
  setErrorMessage,
  isSubmitted,
  setIsSubmitted,
  onLogin,
}) {
  
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    email: "",
    password: "",
  });

  const disabledButton = !isValid || isSubmitted;
  const disabledInput = isSubmitted;

  function handleSubmit(evt) {
    evt.preventDefault();
    // если валидация прошла успешна
    if (isValid) {
      // очищаем предыдущую ошибку
      setErrorMessage("");
      // отправляем запрос к API на авторизацию пользователя
      onLogin(values.email, values.password);
      // блокируем кнопку и поля
      setIsSubmitted(true);
    }
  }

  return (
    <Auth
      greeting="Рады видеть!"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      route="/signup"
    >
      <AuthForm name="login" onSubmit={handleSubmit}>
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
          form="login"
          errorMessage={errorMessage}
          text="Войти"
          disabled={disabledButton}
        />
      </AuthForm>
    </Auth>
  );
}

export default Login;
