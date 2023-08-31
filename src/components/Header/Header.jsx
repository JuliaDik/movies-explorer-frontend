// ШАПКА САЙТА
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn }) {
  const location = useLocation();

  return (
    <header className={`
      header
      ${location.pathname === "/" ? "header_type_landing" : ""}
    `}>
      <div className="header__container">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
    </header>
  );
}

export default Header;
