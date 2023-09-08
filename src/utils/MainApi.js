class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // ПРОВЕРИТЬ ОТВЕТ СЕРВЕРА
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // РЕГИСТРАЦИЯ: создать пользователя
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  // АВТОРИЗАЦИЯ: предоставить пользователю токен, позволяющий получить доступ к защищенным маршрутам
  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._checkResponse);
  }

  // ПРОВЕРИТЬ ТОКЕН
  checkToken(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`,
      },
    }).then(this._checkResponse);
  }

  // ПОЛУЧИТЬ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ (name и email)
  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // ОБНОВИТЬ ДАННЫЕ ПОЛЬЗОВАТЕЛЯ (name и email)
  updateUserData(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  // ПОЛУЧИТЬ СОХРАНЕННЫЕ ФИЛЬМЫ
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // ДОБАВИТЬ ФИЛЬМ В СОХРАНЕННЫЕ
  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._checkResponse);
  }

  // УДАЛИТЬ ФИЛЬМ ИЗ СОХРАНЕННЫХ
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.movies.dikolenko.nomoreparties.co",
  headers: {
    "Accept": "application/json",
    // формат передачи данных в теле запроса/ответа - json
    "Content-Type": "application/json",
    // внутри запросов отправляется токен пользователя, выданный ему сервером при авторизации
    // токен хранится в локальном хранилище браузера
    // Bearer - имя схемы аутентификации; схема сообщает серверу, что проверять наличие прав у пользователя нужно по токену
    // только авторизованным пользователям предоставляется доступ к защищенным маршрутам
    // теперь пользователю не нужно вводить пароль при каждом посещении сайта
    "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export default mainApi;
