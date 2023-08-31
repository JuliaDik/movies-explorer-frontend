import "./AuthForm.css";

function AuthForm({ name, onSubmit, children }) {
  return (
    <form
      className="authentication__form"
      name={name}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
    </form>
  );
}

export default AuthForm;
