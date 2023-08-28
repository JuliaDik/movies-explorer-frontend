import useFormAndValidation from "../../hooks/useFormAndValidation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./AuthForm.css";

function AuthForm({ formType, textButton, onSubmit, children }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      onSubmit(values.name, values.email, values.password);
    }
  }

  return (
    <>
      <Form location="authentication" onSubmit={handleSubmit}>
        <div className="authentication__inputs">
          {formType === "register" && (
            <Input
              location="authentication"
              label="Имя"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              value={values.name || ""}
              errorMessage={errors.name}
              handleChange={handleChange}
            />
          )}
          <Input
            location="authentication"
            label="Email"
            name="email"
            type="email"
            value={values.email || ""}
            errorMessage={errors.email}
            handleChange={handleChange}
          />
          <Input
            location="authentication"
            label="Пароль"
            name="password"
            type="password"
            value={values.password || ""}
            errorMessage={errors.password}
            handleChange={handleChange}
          />
        </div>
        <SubmitButton
          location="authentication"
          text={textButton}
          // errorMessage
          isValid={isValid}
        />
      </Form>
      {children}
    </>
  );
}

export default AuthForm;
