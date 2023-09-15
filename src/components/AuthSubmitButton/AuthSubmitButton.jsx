import "./AuthSubmitButton.css";

function AuthSubmitButton({ form, errorMessage, text, disabled }) {
  return (
    <div
      className={`
        authentication__submit-wrapper
        authentication__submit-wrapper_type_${form}
      `}
    >
      <span className="authentication__error-request">{errorMessage}</span>
      <button
        className="authentication__submit-button button"
        type="submit"
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
}

export default AuthSubmitButton;
