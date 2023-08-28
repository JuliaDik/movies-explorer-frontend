function SubmitButton({ location, text, errorMessage, isValid }) {
  return (
    <div className={`${location}__buttons-wrapper`}>
      <span className={`${location}__error-message`}>{errorMessage}</span>
      <button
        className={`
          ${location}__submit-button
          button
        `}
        type="submit"
        disabled={!isValid}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;