// ВАЛИДАЦИЯ
const REGEX_NAME = "[A-zА-яёЁ\\s\\-]+";
const REGEX_EMAIL = "^[A-z0-9+_.\\-]+@[A-z0-9]+\\.[A-z0-9]{2,}$";

// КОДЫ ОШИБОК
const ERROR_400 = 400;
const ERROR_401 = 401;
const ERROR_409 = 409;

// СООБЩЕНИЯ ОШИБОК
// 400
const ERROR_VALIDATION = "Переданы некорректные данные";
const ERROR_INCORRECT_USER_ID = "Передан некорректный _id пользователя";
const ERROR_INCORRECT_MOVIE_ID = "Передан некорректный _id фильма";
// 401
const ERROR_INCORRECT_CREDENTIALS = "Неправильные почта или пароль";
const ERROR_UNAUTHORIZED = "Необходима авторизация";
// 409
const ERROR_NOT_UNIQUE_EMAIL = "Пользователь с таким email уже зарегистрирован";
// другое
const ERROR_REGISTRATION = "При регистрации пользователя произошла ошибка";
const ERROR_LOGIN = "При авторизации пользователя произошла ошибка";
const ERROR_UPDATE_PROFILE = "При обновлении профиля произошла ошибка";
const ERROR_GET_MOVIES = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз."
const ERROR_NO_KEYWORDS = "Нужно ввести ключевое слово";
const ERROR_NOT_FOUND_MOVIES = "Ничего не найдено";

// УВЕДОМЛЕНИЯ
const NOTICE_UPDATE_PROFILE = "Данные профиля успешно обновлены";

// НАСТРОЙКИ ОТОБРАЖЕНИЯ КАРТОЧЕК С ФИЛЬМАМИ
// брейкпоинты
const VIEWPORT_EXTRA_LARGE = 1280;
const VIEWPORT_LARGE = 990;
const VIEWPORT_MEDIUM = 617;
// количество отображаемых после поиска карточек
const INITIAL_CARDS_EXTRA_LARGE = 16;
const INITIAL_CARDS_LARGE = 12;
const INITIAL_CARDS_MEDIUM = 8;
const INITIAL_CARDS_SMALL = 5;
// количество добавляемых карточек
const MORE_CARDS_EXTRA_LARGE = 4;
const MORE_CARDS_LARGE = 3;
const MORE_CARDS_MEDIUM = 2;
const MORE_CARDS_SMALL = 2;
// длительность короткометражек
const DURATION_SHORT_MOVIES = 40;

export {
  REGEX_NAME,
  REGEX_EMAIL,
  ERROR_400,
  ERROR_401,
  ERROR_409,
  ERROR_VALIDATION,
  ERROR_INCORRECT_USER_ID,
  ERROR_INCORRECT_MOVIE_ID,
  ERROR_INCORRECT_CREDENTIALS,
  ERROR_UNAUTHORIZED,
  ERROR_NOT_UNIQUE_EMAIL,
  ERROR_REGISTRATION,
  ERROR_LOGIN,
  ERROR_UPDATE_PROFILE,
  ERROR_GET_MOVIES,
  ERROR_NO_KEYWORDS,
  ERROR_NOT_FOUND_MOVIES,
  VIEWPORT_EXTRA_LARGE,
  VIEWPORT_LARGE,
  VIEWPORT_MEDIUM,
  INITIAL_CARDS_EXTRA_LARGE,
  INITIAL_CARDS_LARGE,
  INITIAL_CARDS_MEDIUM,
  INITIAL_CARDS_SMALL,
  MORE_CARDS_EXTRA_LARGE,
  MORE_CARDS_LARGE,
  MORE_CARDS_MEDIUM,
  MORE_CARDS_SMALL,
  NOTICE_UPDATE_PROFILE,
  DURATION_SHORT_MOVIES,
};
