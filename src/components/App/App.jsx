// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";
import "./App.css";

function App() {
  // статус авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([]);
  // навигация по роутам
  const navigate = useNavigate();

  function handleRegister(name, email, password) {
    navigate("/signin", { replace: true });
  }

  function handleLogin(email, password) {
    setIsLoggedIn(true);
    navigate("/movies", { replace: true });
  }

  function handleLogout() {
    // очищаем локальное хранилище
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/signin", { replace: true });
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        // каждый сохраняемый фильм добавляется в массив среди прочих
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleDeleteMovie(movieId) {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        // из массива сохраненных фильмов удаляется только тот фильм,
        // чей id совпадает с id фильма, запрошенного к удалению
        setSavedMovies((savedMovies) => savedMovies.filter((savedMovie) => savedMovie._id !== movieId));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  return (
    <div className="page">
      <Routes>
        {/* лэндинг */}
        <Route
          path="/"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        {/* регистрация */}
        <Route
          path="/signup"
          element={
            <Register
              onRegister={handleRegister}
            />
          }
        ></Route>
        {/* авторизация */}
        <Route
          path="/signin"
          element={
            <Login
              onLogin={handleLogin}
            />
          }>
        </Route>
        {/* фильмы */}
        <Route
          path="/movies"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <Movies
                onSave={handleSaveMovie}
                onDelete={handleDeleteMovie}
              />
              <Footer />
            </>
          }
        ></Route>
        {/* сохраненные фильмы */}
        <Route
          path="/saved-movies"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <SavedMovies
                savedMovies={savedMovies}
              />
              <Footer />
            </>
          }
        ></Route>
        {/* редактирование профиля */}
        <Route
          path="/profile"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <Profile
                onLogout={handleLogout}
              />
            </>
          }
        ></Route>
        {/* ошибка 404 */}
        <Route
          path="*"
          element={
            <NotFoundError />
          }
        >
        </Route>
      </Routes>
    </div>
  );
}

export default App;
