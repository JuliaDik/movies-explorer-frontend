function Form({ location, onSubmit, children }) {
  return (
    <form
      className={`${location}__form`}
      name={location}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
    </form>
  );
}

export default Form;
