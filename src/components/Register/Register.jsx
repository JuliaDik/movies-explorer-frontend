// РЕГИСТРАЦИЯ
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Auth from "../Auth/Auth";
import AuthForm from "../AuthForm/AuthForm";
import AuthInput from "../AuthInput/AuthInput";
import AuthSubmitButton from "../AuthSubmitButton/AuthSubmitButton";
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
          placeholder="Имя"
          minLength="2"
          maxLength="30"
          value={values.name || ""}
          errorMessage={errors.name}
          onChange={handleChange}
        />
        <AuthInput
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
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
          form="register"
          // errorMessage=
          text="Зарегистрироваться"
          isValid={isValid}
        />
      </AuthForm>
    </Auth>
  );
}

export default Register;
