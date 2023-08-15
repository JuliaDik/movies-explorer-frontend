// НАВИГАЦИЯ (О проекте, Технологии, Студент)
import "./NavTab.css";

function NavTab() {
  return (
    <section className="navtab" aria-label="навигационная панель">
      <nav className="navtab_nav">
        <ul className="navtab_list">
          <li className="navtab_item">
            <a className="navtab_link" href="#about-project">
              О проекте
            </a>
          </li>
          <li className="navtab_item">
            <a className="navtab_link" href="#techs">
              Технологии
            </a>
          </li>
          <li className="navtab_item">
            <a className="navtab_link" href="#student">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
