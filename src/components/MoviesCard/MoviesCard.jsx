// КАРТОЧКА ФИЛЬМА
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ card }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(false);

  function handleSave() {
    setIsSaved(!isSaved);
  }

  return (
    <li className="card">
      <img className="card__image" src={card.image} alt="Постер фильма" />
      <div className="card__body">
        <h2 className="card__title">{card.title}</h2>
        <button
          className={
            `card__save-button
            ${isSaved ? "card__save-button_active" : ""}
            ${location.pathname === "/saved-movies" ? "card__delete-button" : ""}
            button`
          }
          type="button"
          aria-label="сохранить или удалить"
          onClick={handleSave}
        ></button>
        <span className="card__time">{card.time}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
