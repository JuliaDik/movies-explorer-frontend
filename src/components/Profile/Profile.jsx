// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
import { useState } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import "./Profile.css";

function Profile({ onLogout }) {
  const { values, errors, isValid, handleChange } = useFormAndValidation({
    name: "",
    email: "",
  });

  const [isEditMode, setEditMode] = useState(false);

  function handleEdit() {
    setEditMode(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      setEditMode(false);
    }
  }

  return (
    <main className="profile">
      <div className="profile__content">
        <h2 className="profile__greeting">Привет, Юлия!</h2>
        <form
          className="profile__form"
          name="profile"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="profile__field">
            <label className="profile__label" for="name">
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
              minlength="2"
              maxlength="30"
              value={values.name || ""}
              errorMessage={errors.name}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <span className="profile__error-message">{errors.name}</span>
          </div>
          <div className="profile__field">
            <label className="profile__label" for="name">
              Email
            </label>
            <input
              className={`
                profile__input
                  ${errors.name ? `profile__input_type_error` : ""}
                `}
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email || ""}
              errorMessage={errors.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <span className="profile__error-message">{errors.name}</span>
          </div>
        </form>
        {!isEditMode ? (
          <div className="profile__actions-wrapper">
            <button
              className="profile__edit-button link"
              type="button"
              onClick={handleEdit}
            >
              Редактировать
            </button>
            <button
              className="profile__logout-button link"
              type="button"
              onClick={onLogout}
            >
              Выйти из аккаунта
            </button>
          </div>
        ) : (
          <div className="profile__submit-wrapper">
            <span className="profile__error-message">{errors.email}</span>
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
