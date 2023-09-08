// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
import { useEffect, useContext } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/constants";
import "./Profile.css";

function Profile({ onUpdate, onLogout, error, onEdit, isEditMode }) {
  const currentUser = useContext(CurrentUserContext);

  const { values, setValues, errors, isValid, handleChange } = useFormAndValidation({
    name: "",
    email: "",
  });

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
    onEdit(false);
  }, [setValues, onEdit, currentUser]);


  function handleEditMode() {
    onEdit(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      onUpdate(values.name, values.email);
    }
  }

  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__greeting">{`Привет, ${values.name}!`}</h2>
        <form
          className="profile__form"
          name="profile"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile__field">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              className={`
                profile__input
                  ${errors.name ? `profile__input_type_error` : ""}
                `}
              id="name"
              type="text"
              placeholder="Имя"
              name="name"
              minLength="2"
              maxLength="30"
              pattern={NAME_REGEX}
              value={values.name || ""}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <span className="profile__error-message">{errors.name}</span>
          </div>
          <div className="profile__field">
            <label className="profile__label" htmlFor="email">
              Email
            </label>
            <input
              className={`
                profile__input
                  ${errors.email ? `profile__input_type_error` : ""}
                `}
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              pattern={EMAIL_REGEX}
              value={values.email || ""}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <span className="profile__error-message">{errors.email}</span>
          </div>
        </form>
        {!isEditMode ? (
          <div className="profile__actions-wrapper">
            <button
              className="profile__edit-button button"
              type="button"
              disabled={!isValid}
              onClick={handleEditMode}
            >
              Редактировать
            </button>
            <button
              className="profile__logout-button button"
              type="button"
              onClick={onLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        ) : (
          <div className="profile__submit-wrapper">
            <span className="profile__error-message">{error}</span>
            <button
              className="profile__submit-button button"
              type="submit"
              disabled={!isValid}
              onClick={handleSubmit}
            >
              Сохранить
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Profile;
