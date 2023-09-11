// ВАЛИДАЦИЯ
const NAME_REGEX = "[A-zА-яёЁ\\s\\-]+";
const EMAIL_REGEX = "^[A-z0-9+_.\\-]+@[A-z0-9]+\\.[A-z0-9]{2,}$";

// СТАТУСЫ И СООБЩЕНИЯ ОБ ОШИБКАХ
const statusCode = {
  badRequestError: 400,
  unauthorizedError: 401,
  conflictError: 409,
};

const badRequestErrorMessage = {
  userData: "Переданы некорректные данные при создании пользователя",
  userUpdate: 'Переданы некорректные данные при обновлении профиля',
};

const unauthorizedErrorMessage = {
  userCredentials: "Неправильные почта или пароль",
};

const conflictErrorMessage = {
  userEmail: "Пользователь с таким email уже зарегистрирован",
};

const authErrorMessage = {
  register: "При регистрации пользователя произошла ошибка",
  login: "При авторизации пользователя произошла ошибка",
  profile: "При обновлении профиля произошла ошибка",
};

export {
  EMAIL_REGEX,
  NAME_REGEX,
  statusCode,
  badRequestErrorMessage,
  unauthorizedErrorMessage,
  conflictErrorMessage,
  authErrorMessage,
};
