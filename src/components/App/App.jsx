// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
import {
  statusCode,
  badRequestErrorMessage,
  unauthorizedErrorMessage,
  conflictErrorMessage,
  authErrorMessage,
} from "../../utils/constants";
import "./App.css";

function App() {
  // статус авторизации
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([]);
  // сообщение об ошибке
  const [error, setError] = useState("");
  // пользователь
  const [currentUser, setCurrentUser] = useState({});
  // режим редактирования профиля
  const [isEditMode, setIsEditMode] = useState(false);
  // навигация по роутам
  const navigate = useNavigate();

  // монтирование пользователя и сохраненных карточек
  useEffect(() => {
    // если пользователь авторизован
    if (isLoggedIn) {
      // получаем данные пользователя и отрисовываем сохраненные фильмы
      Promise.all([mainApi.getUserData(), mainApi.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          // и сохраняем их в стейт-переменной
          setCurrentUser(userData);
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    // если в локальном хранилище браузера есть токен
    if (jwt) {
      mainApi
        // и этот токен совпадает с токеном, который вернул пользователю сервер
        .checkToken(jwt)
        .then(() => {
          // тогда сохраняем за пользователем статус "авторизован"
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [navigate]);

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then(() => {
        setError("");
        // если ответ на запрос успешен
        // пользователь сразу авторизовывается
        handleLogin(email, password);
      })
      .catch((err) => {
        if (err.includes(statusCode.conflictError)) {
          setError(conflictErrorMessage.userEmail);
        } else if (err.includes(statusCode.badRequestError)) {
          setError(badRequestErrorMessage.userData);
        } else {
          setError(authErrorMessage.register);
        }
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .login(email, password)
      .then(({ token }) => {
        setError("");
        // если пользователь найден в БД по переданным учетным данным,
        // то сервер предоставляет токен
        // сохраняем токен в локальном хранилище браузера
        localStorage.setItem("jwt", token);
        setIsLoggedIn(true);
        // и перенаправляем на страницу "Фильмы"
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err.includes(statusCode.unauthorizedError)) {
          setError(unauthorizedErrorMessage.userCredentials);
        } else {
          setError(authErrorMessage.login);
        }
        console.log(err);
      });
  }

  function handleLogout() {
    // при выходе из системы очищаем локальное хранилище
    localStorage.clear();
    setIsLoggedIn(false);
    // пользователь перенаправляется на страницу авторизации
    navigate("/signin", { replace: true });
  }

  function handleUpdateUserData(name, email) {
    mainApi
      .updateUserData(name, email)
      .then((user) => {
        setCurrentUser(user);
        setIsEditMode(false);
      })
      .catch((err) => {
        if (err.includes(statusCode.conflictError)) {
          setError(conflictErrorMessage.userEmail);
        } else if (err.includes(statusCode.badRequestError)) {
          setError(badRequestErrorMessage.userUpdate);
        } else {
          setError(authErrorMessage.profile);
        }
        console.log(err);
      });
  }

  function handleSaveMovie(movie) {
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        // возвращаются данные сохраненного фильма, содержащие:
        // 1) movieId - с BeatfilmMoviesApi (1, 2, ...)
        // 2) _id - длинный идентификатор, присвоенный БД
        // каждый сохраняемый фильм добавляется в массив
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movieId) {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        // из массива сохраненных фильмов удаляется только тот фильм,
        // чей id совпадает с id фильма, запрошенного к удалению
        setSavedMovies((savedMovies) =>
          savedMovies.filter((savedMovie) => savedMovie._id !== movieId)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          {/* лэндинг */}
          <Route
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Main />
                <Footer />
              </>
            }
          ></Route>
          {/* регистрация */}
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} error={error} />}
          ></Route>
          {/* авторизация */}
          <Route
            path="/signin"
            element={<Login onLogin={handleLogin} error={error} />}
          ></Route>
          {/* фильмы */}
          <Route
            path="/movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Movies onSave={handleSaveMovie} onDelete={handleDeleteMovie} />
                <Footer />
              </>
            }
          ></Route>
          {/* сохраненные фильмы */}
          <Route
            path="/saved-movies"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <SavedMovies
                  savedMovies={savedMovies}
                  onDelete={handleDeleteMovie}
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
                <Header isLoggedIn={isLoggedIn} />
                <Profile
                  error={error}
                  isEditMode={isEditMode}
                  onEdit={setIsEditMode}
                  onUpdate={handleUpdateUserData}
                  onLogout={handleLogout}
                />
              </>
            }
          ></Route>
          {/* ошибка 404 */}
          <Route path="*" element={<NotFoundError />}></Route>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
