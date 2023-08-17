// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import { Route, Routes } from "react-router-dom";
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
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login />}></Route>
        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <Header />
              <Profile />
            </>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
