// ПОРТФОЛИО
import Container from "../Container/Container";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio" aria-label="портфолио">
      <Container>
        <h2 className="portfolio__title">Портфолио</h2>
        <nav className="portfolio__nav">
          <ul className="portfolio__list">
            <li className="portfolio__item">
              <a
                className="portfolio__link link"
                href="https://github.com/JuliaDik/how-to-learn.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Статичный сайт
                <span className="portfolio__arrow">↗</span>
              </a>
            </li>
            <li className="portfolio__item">
              <a
                className="portfolio__link link"
                href="https://github.com/JuliaDik/russian-travel.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Адаптивный сайт
                <span className="portfolio__arrow">↗</span>
              </a>
            </li>
            <li className="portfolio__item">
              <a
                className="portfolio__link link"
                href="https://github.com/JuliaDik/react-mesto-api-full-gha.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Одностраничное приложение
                <span className="portfolio__arrow">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </section>
  );
}

export default Portfolio;
