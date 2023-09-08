// ВАЛИДАЦИЯ
const NAME_REGEX = "[A-zА-яёЁ\\s\\-]+";
const EMAIL_REGEX = "^[A-z0-9+_.\\-]+@[A-z0-9]+\\.[A-z0-9]{2,}$";

// СТАТУСЫ И СООБЩЕНИЯ ОБ ОШИБКАХ
const statusCode = {
  badRequestError: 400,
  unauthorizedError: 401,
  // forbiddenError: 403,
  // notFoundError: 404,
  conflictError: 409,
  // serverError: 500,
};

const badRequestErrorMessage = {
  userData: "Переданы некорректные данные при создании пользователя",
  // userId: 'Передан некорректный _id пользователя',
  userUpdate: 'Переданы некорректные данные при обновлении профиля',
  // movieData: 'Переданы некорректные данные при создании фильма',
  // movieId: 'Передан некорректный _id фильма',
};

const unauthorizedErrorMessage = {
  // userLogin: "Необходима авторизация",
  userCredentials: "Неправильные почта или пароль",
};

// const forbiddenErrorMessage = {
//   movieOwner: "Нельзя удалить фильм другого пользователя",
// };

// const notFoundErrorMessage = {
//   userId: "Пользователь с указанным _id не найден",
//   movieId: "Фильм с указанным _id не найден",
//   noRoute: "Запрашиваемый роут не найден",
// };

const conflictErrorMessage = {
  userEmail: "Пользователь с таким email уже зарегистрирован",
};

// const serverErrorMessage = {
//   server: "На сервере произошла ошибка",
// };

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
