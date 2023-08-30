// НАВИГАЦИОННАЯ ПАНЕЛЬ (лэндинг)
// (О проекте, Технологии, Студент)
import { HashLink as Link } from "react-router-hash-link";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab" aria-label="навигационная панель">
      <nav className="navtab__nav">
        <ul className="navtab__list">
          <li className="navtab__item">
            <Link className="navtab__link link" to="#project">
              О проекте
            </Link>
          </li>
          <li className="navtab__item">
            <Link className="navtab__link link" to="#techs">
              Технологии
            </Link>
          </li>
          <li className="navtab__item">
            <Link className="navtab__link link" to="#student">
              Студент
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
