// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
import { useState } from "react";
import "./Profile.css";

function Profile({ onLogout }) {
  const [isEditMode, setEditMode] = useState(false);

  function handleEditClick() {
    setEditMode(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setEditMode(false);
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
          <div className="profile__inputs">
            <div className="profile__field">
              <label className="profile__label" for="name">
                Имя
              </label>
              <input
                className="profile__input"
                id="name"
                type="text"
                name="name"
                value="Юлия"
                minlength="2"
                maxlength="30"
                autoComplete="off"
                reguired
              />
              <span className="profile__error-message">
                Что-то пошло не так...
              </span>
            </div>
            <div className="profile__field">
              <label className="profile__label" for="email">
                E-mail
              </label>
              <input
                className="profile__input"
                id="email"
                type="email"
                name="email"
                value="pochta@yandex.ru"
                autoComplete="off"
                reguired
              />
              <span className="profile__error-message">
                Что-то пошло не так...
              </span>
            </div>
          </div>
          <div className="profile__buttons">
            {!isEditMode ? (
              <>
                <button
                  className="profile__edit-button link"
                  type="button"
                  aria-label="редактировать"
                  onClick={handleEditClick}
                >
                  Редактировать
                </button>
                <button
                  className="profile__logout-button link"
                  type="button"
                  aria-label="выйти из аккаунта"
                  onClick={onLogout}
                >
                  Выйти из аккаунта
                </button>
              </>
            ) : (
              <>
                <span className="profile__error-message">
                  При обновлении профиля произошла ошибка
                </span>
                <button
                  className="profile__save-button button"
                  type="submit"
                  aria-label="сохранить"
                >
                  Сохранить
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}

export default Profile;
