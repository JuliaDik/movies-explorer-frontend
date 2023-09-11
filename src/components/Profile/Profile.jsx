// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
import { useEffect, useContext } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/constants";
import "./Profile.css";

function Profile({ error, isEditMode, onEdit, onUpdate, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, setValues, errors, isValid, handleChange } = useFormAndValidation({
      name: "",
      email: "",
    });
  const disabledButton = !isValid || (values.name === currentUser.name && values.email === currentUser.email);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser]);

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
              placeholder="Иван Иванов"
              name="name"
              minLength="2"
              maxLength="30"
              pattern={NAME_REGEX}
              value={values.name || ""}
              onChange={handleChange}
              autoComplete="off"
              disabled={!isEditMode}
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
              placeholder="my_email@gmail.com"
              name="email"
              pattern={EMAIL_REGEX}
              value={values.email || ""}
              onChange={handleChange}
              autoComplete="off"
              disabled={!isEditMode}
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
            <span className="profile__error-request">{error}</span>
            <button
              className="profile__submit-button button"
              type="submit"
              disabled={disabledButton}
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
