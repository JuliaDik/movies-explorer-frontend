// КАРТОЧКА ФИЛЬМА
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ card, onSave, onDelete }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  function convertDuration() {
    const houres = Math.floor(card.duration / 60);
    const minutes = card.duration % 60;
    return `${houres}ч${minutes}м`;
  }

  function handleSave() {
    setIsSaved(!isSaved);
    // если кликнуть по неактивной иконке, тогда isSaved меняется на true
    if (isSaved === true) {
      // и отправляется запрос к API на сохранение фильма
      onSave(card);
      // если кликнуть по активной иконке, тогда isSaved меняется на false
    } else {
      // и отправляется запрос к API на удаление фильма
      onDelete(card.id);
    }
  }

  return (
    <li className="card">
      <a
        className="card__image-link link"
        href={card.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="card__image"
          src={`https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU}
        />
      </a>
      <div className="card__body">
        <h2 className="card__title">{card.nameRU}</h2>
        {location.pathname === "/saved-movies" ? (
          <button
            className={`
              card__delete-button
              button
            `}
            type="button"
            aria-label="удалить"
            onClick={handleSave}
          ></button>
        ) : (
          <button
            className={`
              card__save-button
              ${isSaved ? "card__save-button_active" : ""}
              button
            `}
            type="button"
            aria-label="сохранить"
            onClick={handleSave}
          ></button>
        )}
        <span className="card__time">{convertDuration()}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
