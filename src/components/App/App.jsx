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
  ERROR_400,
  ERROR_401,
  ERROR_409,
  ERROR_500,
  ERROR_VALIDATION,
  ERROR_INCORRECT_USER_ID,
  ERROR_INCORRECT_MOVIE_ID,
  ERROR_INCORRECT_CREDENTIALS,
  ERROR_UNAUTHORIZED,
  ERROR_NOT_UNIQUE_EMAIL,
  ERROR_SERVER,
  ERROR_REGISTRATION,
  ERROR_LOGIN,
  ERROR_UPDATE_PROFILE,
  NOTICE_UPDATE_PROFILE,
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
  // уведомление
  const [notice, setNotice] = useState("");
  // статус сабмита
  const [isSubmitted, setIsSubmitted] = useState(false);
  // переход по роуту
  const navigate = useNavigate();
  // текущий роут
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  const isMoviesPage = pathname === "/movies";
  const isSavedMoviesPage = pathname === "/saved-movies";

  // сброс ошибок и ответов
  useEffect(() => {
    setError("");
    setNotice("");
  }, [pathname]);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    // если токен есть в локальном хранилище браузера
    if (token) {
      // отправляем запрос на проверку токена
      mainApi
        .checkToken(token)
        .then((userData) => {
          // если токен валиден, возвращаются данные пользователя
          if (userData) {
            // сохраняем данные пользователя в стейт-переменную
            setCurrentUser(userData);
            // определяем статус "Авторизован"
            setIsLoggedIn(true);
            // перенаправляем на текущую страницу
            navigate(pathname, { replace: true });
          // если токен невалиден
          } else {
            // выходим из системы
            handleLogout();
          }
        })
        .catch((err) => {
          if (err === ERROR_401) {
            console.log(ERROR_UNAUTHORIZED);
          } else if (err === ERROR_400) {
            console.log(ERROR_INCORRECT_USER_ID);
          } else if (err === ERROR_500) {
            console.log(ERROR_SERVER);
          } else {
            console.log(err);
          }
        });
    // если токена нет в локальном хранилище браузера
    } else {
      // выходим из системы
      handleLogout();
    }
  }, []);

  useEffect(() => {
    // если пользователь авторизован
    if (isLoggedIn) {
      // получаем данные пользователя с сервера
      mainApi
        .getUserData()
        .then((userData) => {
          // сохраняем в стейт-переменную
          setCurrentUser(userData);
        })
        .catch((err) => {
          if (err === ERROR_401) {
            console.log(ERROR_UNAUTHORIZED);
          } else if (err === ERROR_400) {
            console.log(ERROR_INCORRECT_USER_ID);
          } else if (err === ERROR_500) {
            console.log(ERROR_SERVER);
          } else {
            console.log(err);
          }
        });
      }
  }, [isLoggedIn]);

  useEffect(() => {
    // если пользователь авторизован
    if (isLoggedIn) {
      // получаем сохраненные фильмы с сервера
      mainApi
        .getSavedMovies()
        .then((savedMovies) => {
          // сохраняем в стейт-переменную
          setSavedMovies(savedMovies.reverse());
        })
        .catch((err) => {
          if (err === ERROR_401) {
            console.log(ERROR_UNAUTHORIZED);
          } else if (err === ERROR_500) {
            console.log(ERROR_SERVER);
          } else {
            console.log(err);
          }
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
        if (err === ERROR_409) {
          setError(ERROR_NOT_UNIQUE_EMAIL);
        } else if (err === ERROR_400) {
          setError(ERROR_VALIDATION);
        } else if (err === ERROR_500) {
          setError(ERROR_SERVER);
        } else {
          setError(ERROR_REGISTRATION);
        }
      })
      .finally(() => {
        setIsSubmitted(false);
      });
  }

  function handleLogin(email, password) {
    mainApi
      .login(email, password)
      .then(({ token }) => {
        // сохраняем токен в локальном хранилище браузера
        localStorage.setItem("jwt", token);
        // определяем статус "Авторизован"
        setIsLoggedIn(true)
        // перенаправляем на страницу «Фильмы»
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        if (err === ERROR_401) {
          setError(ERROR_INCORRECT_CREDENTIALS);
        } else if (err === ERROR_500) {
          setError(ERROR_SERVER);
        } else {
          setError(ERROR_LOGIN);
        }
      })
      .finally(() => {
        setIsSubmitted(false);
      });
  }

  function handleLogout() {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    setSavedMovies([]);
    navigate("/", { replace: true });
  }

  function handleUpdateUserData(name, email) {
    mainApi
      .updateUserData(name, email)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        if (err === ERROR_401) {
          console.log(ERROR_UNAUTHORIZED);
        } else if (err === ERROR_409) {
          setError(ERROR_NOT_UNIQUE_EMAIL);
        } else if (err === ERROR_400) {
          setError(ERROR_VALIDATION);
        } else if (err === ERROR_500) {
          setError(ERROR_SERVER);
        } else {
          setError(ERROR_UPDATE_PROFILE);
        }
      })
      .finally(() => {
        setIsSubmitted(false);
        setIsEditMode(false);
        setNotice(NOTICE_UPDATE_PROFILE);
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
        if (err === ERROR_401) {
          console.log(ERROR_UNAUTHORIZED);
        } else if (err === ERROR_400) {
          console.log(ERROR_VALIDATION);
        } else if (err === ERROR_500) {
          console.log(ERROR_SERVER);
        } else {
          console.log(err);
        }
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
        if (err === ERROR_401) {
          console.log(ERROR_UNAUTHORIZED);
        } else if (err === ERROR_400) {
          console.log(ERROR_INCORRECT_MOVIE_ID);
        } else if (err === ERROR_500) {
          console.log(ERROR_SERVER);
        } else {
          console.log(err);
        }
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
                <Register
                  error={error}
                  isSubmitted={isSubmitted}
                  setIsSubmitted={setIsSubmitted}
                  onRegister={handleRegister}
                />
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
                <Login
                  error={error}
                  isSubmitted={isSubmitted}
                  setIsSubmitted={setIsSubmitted}
                  onLogin={handleLogin}
                />
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
                    savedMovies={savedMovies}
                    isMoviesPage={isMoviesPage}
                    isSavedMoviesPage={isSavedMoviesPage}
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
                    savedMovies={savedMovies}
                    isSavedMoviesPage={isSavedMoviesPage}
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
                    notice={notice}
                    isSubmitted={isSubmitted}
                    setIsSubmitted={setIsSubmitted}
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
