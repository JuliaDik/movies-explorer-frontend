// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import "./App.css";

function App() {
  // авторизация
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  function handleRegister() {
    navigate("/signin", { replace: true });
  }

  function handleLogin() {
    setIsLoggedIn(true);
    navigate("/movies", { replace: true });
  }

  function handleLogout() {
    setIsLoggedIn(false);
    navigate("/signin", { replace: true });
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={isLoggedIn} isLanding={true} />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={<Register onRegister={handleRegister} />}
        ></Route>
        <Route
          path="/signin"
          element={<Login onLogin={handleLogin} />}
        ></Route>
        <Route
          path="/movies"
          element={
            <>
              <Header loggedIn={isLoggedIn} isLanding={false}/>
              <Movies />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <>
              <Header loggedIn={isLoggedIn} isLanding={false}/>
              <SavedMovies />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={isLoggedIn} isLanding={false}/>
              <Profile onLogout={handleLogout} />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
