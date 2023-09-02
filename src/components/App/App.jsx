// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundError from "../NotFoundError/NotFoundError";
import moviesApi from "../../utils/MoviesApi";
import "./App.css";

function App() {
  // авторизация
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // фильмы
  const [movies, setMovies] = useState([]);
  // навигация по роутам
  const navigate = useNavigate();

  // отрисовать карточки с фильмами
  useEffect(() => {
    // если пользователь авторизован
    if (true) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setMovies(movies);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }, [isLoggedIn]);

  function handleRegister(name, email, password) {
    navigate("/signin", { replace: true });
  }

  function handleLogin(email, password) {
    setIsLoggedIn(true);
    navigate("/movies", { replace: true });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/signin", { replace: true });
  }

  function handleSearchFilm(request) {
    // moviesApi
    //   .getMovies()
    //   .then((movies) => {
    //     setMovies(movies);
    //   })
    //   .catch((err) => {
    //     console.log(`Ошибка: ${err}`);
    //   });
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
          }
        ></Route>
        {/* фильмы */}
        <Route
          path="/movies"
          element={
            <>
              <Header
                isLoggedIn={isLoggedIn}
              />
              <Movies 
                movies={movies}
                onSubmit={handleSearchFilm}
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
              <SavedMovies />
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
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
