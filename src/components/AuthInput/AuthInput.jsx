import "./AuthInput.css";

function AuthInput({
  id,
  type,
  name,
  label,
  placeholder,
  minLength,
  maxLength,
  pattern,
  value,
  errorMessage,
  onChange,
}) {
  return (
    <div className="authentication__field">
      <label className="authentication__label" htmlFor={id}>
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
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
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
