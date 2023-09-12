// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
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
  // пользователь
  const [currentUser, setCurrentUser] = useState({});
  // режим редактирования профиля
  const [isEditMode, setIsEditMode] = useState(false);
  // сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([]);
  // сообщение об ошибке
  const [error, setError] = useState("");
  // ответ от сервера
  const [response, setResponse] = useState("");
  // переход по роуту
  const navigate = useNavigate();
  // текущий роут
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const isMovies = pathname === "/movies";
  const isSavedMovies = pathname === "/saved-movies";

  // сброс ошибок
  useEffect(() => {
    setError("");
    setResponse("");
  }, [pathname]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    // если токен есть в локальном хранилище браузера
    if (token) {
      // сохраняется статус "Авторизован"
      setIsLoggedIn(true);
      // перенаправляем на текущую страницу
      navigate(pathname, { replace: true });
    } else {
      // иначе выйти из системы
      handleLogout();
    }
  }, []);

  useEffect(() => {
    // если пользователь авторизован
    if (isLoggedIn) {
      // получаем данные пользователя и сохраненные фильмы с сервера
      Promise.all([mainApi.getUserData(), mainApi.getSavedMovies()])
        .then(([userData, savedMovies]) => {
          // сохраняем в стейт-переменную
          setCurrentUser(userData);
          setSavedMovies(savedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
      }
  }, [isLoggedIn]);

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then(() => {
        // пользователь сразу авторизуется
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
        // сохраняем токен в локальном хранилище браузера
        localStorage.setItem("jwt", token);
        // выставляем статус "Авторизован"
        setIsLoggedIn(true)
        // перенаправляем на страницу «Фильмы»
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
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/", { replace: true });
  }

  function handleUpdateUserData(name, email) {
    mainApi
      .updateUserData(name, email)
      .then((user) => {
        setCurrentUser(user);
        // после обновления данных пользователя
        // режим редактирования отключается
        setIsEditMode(false);
        // появляется уведомление
        setResponse("Данные профиля успешно обновлены");
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
        // сохраненный фильм добавляем в массив
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
            exact
            path="/"
            element={
              <>
                <Header isLoggedIn={isLoggedIn} isLanding={isLanding} />
                <Main />
                <Footer />
              </>
            }
          ></Route>
          {/* регистрация */}
          <Route
            exact
            path="/signup"
            element={
              isLoggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Register error={error} onRegister={handleRegister} />
              )
            }
          ></Route>
          {/* авторизация */}
          <Route
            exact
            path="/signin"
            element={
              isLoggedIn ? (
                <Navigate to="/movies" replace />
              ) : (
                <Login error={error} onLogin={handleLogin} />
              )
            }
          ></Route>
          {/* фильмы */}
          <Route
            exact
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Movies
                    isMovies={isMovies}
                    savedMovies={savedMovies}
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                  />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          ></Route>
          {/* сохраненные фильмы */}
          <Route
            exact
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <SavedMovies
                    isSavedMovies={isSavedMovies}
                    savedMovies={savedMovies}
                    onDelete={handleDeleteMovie}
                  />
                  <Footer />
                </>
              </ProtectedRoute>
            }
          ></Route>
          {/* редактирование профиля */}
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <>
                  <Header isLoggedIn={isLoggedIn} />
                  <Profile
                    error={error}
                    isEditMode={isEditMode}
                    onResetError={setError}
                    onEdit={setIsEditMode}
                    onUpdate={handleUpdateUserData}
                    onLogout={handleLogout}
                    response={response}
                  />
                </>
              </ProtectedRoute>
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
