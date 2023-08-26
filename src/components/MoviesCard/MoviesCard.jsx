// КАРТОЧКА ФИЛЬМА
import { useState } from "react";
import "./MoviesCard.css";

function MoviesCard({ card }) {
  const [isSaved, setIsSaved] = useState(false);

  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  return (
    <li className="card">
      <img className="card__image" src={card.image} alt="Постер фильма" />
      <div className="card__body">
        <h2 className="card__title">{card.title}</h2>
        <button
          className={
            `card__button
            ${isSaved ? "card__button_active" : ""}
            button`
          }
          type="button"
          aria-label="сохранить"
          onClick={handleSaveClick}
        ></button>
        <span className="card__time">{card.time}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
