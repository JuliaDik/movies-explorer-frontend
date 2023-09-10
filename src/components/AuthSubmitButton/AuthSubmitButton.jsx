import "./AuthSubmitButton.css";

function AuthSubmitButton({ form, errorMessage, text, isValid }) {
  return (
    <div className={`
        authentication__submit-wrapper
        authentication__submit-wrapper_type_${form}
      `}
    >
      <span className="authentication__error-request">{errorMessage}</span>
      <button
        className="authentication__submit-button button"
        type="submit"
        disabled={!isValid}
      >
        {text}
      </button>
    </div>
  );
}

export default AuthSubmitButton;

