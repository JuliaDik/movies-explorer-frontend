import "./AuthInput.css";

function AuthInput({
  id,
  type,
  name,
  label,
  placeholder,
  minLength,
  maxLength,
  value,
  errorMessage,
  onChange,
}) {
  return (
    <div className="authentication__field">
      <label className="authentication__label" for={id}>
        {label}
      </label>
      <input
        className={`
          authentication__input
          ${errorMessage ? `authentication__input_type_error` : ""}
        `}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        minlength={minLength}
        maxlength={maxLength}
        value={value}
        onChange={onChange}
        autoComplete="off"
        required
      />
      <span className="authentication__error-message">
        {errorMessage}
      </span>
    </div>
  );
}

export default AuthInput;
