// КОРНЕВОЙ КОМПОНЕНТ ПРИЛОЖЕНИЯ
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import AboutProject from '../AboutProject/AboutProject';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutProject />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
      <Link to="/">Логотип</Link>
      <Link to="/movies">Фильмы</Link>
      <Link to="/saved-movies">Сохраненные фильмы</Link>
      <Link to="/profile">Аккаунт</Link>
      <Link to="/signup">Регистрация</Link>
      <Link to="/signin">Авторизация</Link>
    </div>
  );
}

export default App;
