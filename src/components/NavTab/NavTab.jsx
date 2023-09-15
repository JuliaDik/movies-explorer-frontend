// НАВИГАЦИОННАЯ ПАНЕЛЬ (лэндинг)
// (О проекте, Технологии, Студент)
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab" aria-label="навигационная панель">
      <nav className="navtab__nav">
        <ul className="navtab__list">
          <li className="navtab__item">
            <a className="navtab__link link" href="#project">
              О проекте
            </a>
          </li>
          <li className="navtab__item">
            <a className="navtab__link link" href="#techs">
              Технологии
            </a>
          </li>
          <li className="navtab__item">
            <a className="navtab__link link" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
