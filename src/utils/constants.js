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
const WIDTH_FOR_16_CARDS = 1280;
const WIDTH_FOR_9_CARDS = 990;
const WIDTH_FOR_8_CARDS = 617;
const WIDTH_FOR_5_CARDS = 616;
// количество отображаемых после поиска карточек
const INITIAL_CARDS_WIDTH_1280 = 16;
const INITIAL_CARDS_WIDTH_990 = 9;
const INITIAL_CARDS_WIDTH_617 = 8;
const INITIAL_CARDS_WIDTH_616 = 5;
// количество добавляемых карточек
const MORE_CARDS_WIDTH_1280 = 4;
const MORE_CARDS_WIDTH_990 = 3;
const MORE_CARDS_WIDTH_617 = 2;
const MORE_CARDS_WIDTH_616 = 2;
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
  NOTICE_UPDATE_PROFILE,
  WIDTH_FOR_16_CARDS,
  WIDTH_FOR_9_CARDS,
  WIDTH_FOR_8_CARDS,
  WIDTH_FOR_5_CARDS,
  INITIAL_CARDS_WIDTH_1280,
  INITIAL_CARDS_WIDTH_990,
  INITIAL_CARDS_WIDTH_617,
  INITIAL_CARDS_WIDTH_616,
  MORE_CARDS_WIDTH_1280,
  MORE_CARDS_WIDTH_990,
  MORE_CARDS_WIDTH_617,
  MORE_CARDS_WIDTH_616,
  DURATION_SHORT_MOVIES,
};
