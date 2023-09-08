class MoviesApi {
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

  // ПОЛУЧИТЬ ВСЕ ФИЛЬМЫ
  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    // формат передачи данных в теле запроса/ответа - json
    "Content-Type": "application/json",
  },
});

export default moviesApi;
