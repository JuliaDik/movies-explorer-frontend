// ПРОФИЛЬ
import "./Profile.css";
import { useState } from "react";

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
    <>
      <section className="profile">
        <div className="profile__container">
          <h2 className="profile__title">Привет, Виталий!</h2>
          <form className="profile__form" onSubmit={handleSubmit}>
            <label className="profile__input-wrapper">
              <span className="profile__label">Имя</span>
              <input
                className="profile__input"
                minlength="2"
                maxlength="30"
                value="Виталий"
                reguired
              />
              <span className="profile__error-message"></span>
            </label>
            <label className="profile__input-wrapper">
              <span className="profile__label">E-mail</span>
              <input
                className="profile__input"
                value="pochta@yandex.ru"
                reguired
              />
              <span className="profile__error-message"></span>
            </label>
            {isEditMode ?
            <div className="profile__save-wrapper">
              <span className="profile__error-message">
                При обновлении профиля произошла ошибка
              </span>
              <button className="profile__save-button">Сохранить</button>
            </div>
            :
            <div className="profile__actions-wrapper">
              <button
                className="profile__edit-button"
                onClick={handleEditClick}
              >
                Редактировать
              </button>
              <button className="profile__logout-button" onClick={onLogout}>
                Выйти из аккаунта
              </button>
            </div>
            }
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
