// КАРТОЧКА ФИЛЬМА
import "./MoviesCard.css";

function MoviesCard({ card, isSavedMovies, onClick, isSaved }) {
  function convertDuration() {
    const houres = Math.floor(card.duration / 60);
    const minutes = card.duration % 60;
    return `${houres}ч${minutes}м`;
  }

  function handleClick() {
    onClick(card);
  };

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
          src={isSavedMovies ? card.image : `https://api.nomoreparties.co/${card.image.url}`}
          alt={card.nameRU}
        />
      </a>
      <div className="card__body">
        <h2 className="card__title">{card.nameRU}</h2>
        {isSavedMovies ? (
          <button
            className={`
              card__delete-button
              button
            `}
            type="button"
            aria-label="удалить"
            onClick={handleClick}
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
            onClick={handleClick}
          ></button>
        )}
        <span className="card__time">{convertDuration()}</span>
      </div>
    </li>
  );
}

export default MoviesCard;
