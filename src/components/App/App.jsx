// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import { Route, Routes } from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import Movies from '../Movies/Movies';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Register from '../Register/Register';
// import Login from '../Login/Login';
// import Profile from '../Profile/Profile';
import "./App.css";

function App() {
  return (
    <div className="page">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} /> */}
      </Routes>
      <Footer/>
      {/* <Routes>
        <Header/>
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
    </div>
  );
}

export default App;