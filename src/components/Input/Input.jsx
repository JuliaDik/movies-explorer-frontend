function Input({
  location,
  label,
  name,
  type,
  minLength,
  maxLength,
  value,
  handleChange,
  errorMessage,
}) {
  return (
    <div className={`${location}__field`}>
      <label className={`${location}__label`} for={name}>
        {label}
      </label>
      <input
        className={`
          ${location}__input
          ${errorMessage ? `${location}__input_type_error` : ""}
        `}
        id={name}
        type={type}
        name={name}
        minlength={minLength}
        maxlength={maxLength}
        value={value || ""}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <span className={`${location}__error-message`}>{errorMessage}</span>
    </div>
  );
}

export default Input;
