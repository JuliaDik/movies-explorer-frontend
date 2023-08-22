// КАРТОЧКА ФИЛЬМА
import { useState } from "react";
import film from "../../images/film.png";
import "./MoviesCard.css";

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);

  function handleSaveClick() {
    setIsSaved(!isSaved);
  }

  return (
    <>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
      <li className="card">
        <img className="card__image" src={film} alt="Постер фильма" />
        <div className="card__body">
          <h2 className="card__title">33 слова о дизайне</h2>
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
          <span className="card__time">1ч42м</span>
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
