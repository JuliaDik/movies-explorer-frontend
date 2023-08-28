// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
import { useState } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import "./Profile.css";

function Profile({ onLogout, onUpdateUser }) {
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
        <Form location="profile" onSubmit={handleSubmit}>
          <div className="profile__inputs">
            <Input
              location="profile"
              label="Имя"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              value={values.name || ""}
              errorMessage={errors.name}
              handleChange={handleChange}
            />
            <Input
              location="profile"
              label="Email"
              name="email"
              type="email"
              value={values.email || ""}
              errorMessage={errors.email}
              handleChange={handleChange}
            />
          </div>
          {!isEditMode ? (
            <>
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
            </>
          ) : (
            <>
              <SubmitButton
                location="profile"
                text="Сохранить"
                // errorMessage
                isValid={isValid}
              />
            </>
          )}
        </Form>
      </div>
    </main>
  );
}

export default Profile;
