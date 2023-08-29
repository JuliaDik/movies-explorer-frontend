// НАВИГАЦИОННАЯ ПАНЕЛЬ (лэндинг)
// (О проекте, Технологии, Студент)
import { HashLink as Link } from "react-router-hash-link";
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab" aria-label="навигационная панель">
      <nav className="navtab_nav">
        <ul className="navtab_list">
          <li className="navtab_item">
            <Link className="navtab_link link" to="#project">
              О проекте
            </Link>
          </li>
          <li className="navtab_item">
            <Link className="navtab_link link" to="#techs">
              Технологии
            </Link>
          </li>
          <li className="navtab_item">
            <Link className="navtab_link link" to="#student">
              Студент
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
