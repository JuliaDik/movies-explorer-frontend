// РЕДАКТИРОВАНИЕ ПРОФИЛЯ
import { useEffect, useContext } from "react";
import useFormAndValidation from "../../hooks/useFormAndValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { REGEX_NAME, REGEX_EMAIL } from "../../utils/constants";
import "./Profile.css";

function Profile({
  errorMessage,
  setErrorMessage,
  notice,
  setNotice,
  isEditMode,
  onEdit,
  onUpdate,
  onLogout,
  isSubmitted,
  setIsSubmitted,
}) {
  
  const currentUser = useContext(CurrentUserContext);

  const { values, setValues, errors, isValid, handleChange } = useFormAndValidation({
    name: "",
    email: "",
  });

  const disabledButton =
    !isValid ||
    (values.name === currentUser.name && values.email === currentUser.email) ||
    isSubmitted;

  const disabledInput = !isEditMode || isSubmitted;

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [setValues, currentUser]);

  function handleEditMode() {
    onEdit(true);
    setNotice("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      // очищаем предыдущую ошибку
      setErrorMessage("");
      // отправляем запрос к API на обновление данных пользователя
      onUpdate(values.name, values.email);
      // блокируем кнопку и поля
      setIsSubmitted(true);
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
                input
              `}
              id="name"
              type="text"
              placeholder="Иван Иванов"
              name="name"
              minLength="2"
              maxLength="30"
              pattern={REGEX_NAME}
              value={values.name || ""}
              onChange={handleChange}
              autoComplete="off"
              disabled={disabledInput}
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
                input
              `}
              id="email"
              type="email"
              placeholder="my_email@gmail.com"
              name="email"
              pattern={REGEX_EMAIL}
              value={values.email || ""}
              onChange={handleChange}
              autoComplete="off"
              disabled={disabledInput}
              required
            />
            <span className="profile__error-message">{errors.email}</span>
          </div>
        </form>
        {!isEditMode ? (
          <div className="profile__actions-wrapper">
            <span className="profile__error-request">{notice}</span>
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
            <span className="profile__error-request">{errorMessage}</span>
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
