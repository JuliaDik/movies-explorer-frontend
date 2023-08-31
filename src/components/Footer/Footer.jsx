// ПОДВАЛ САЙТА
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__upper-text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bottom-text">
          <p className="footer__copyright">© 2023</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                className="footer__link link"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link link"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
