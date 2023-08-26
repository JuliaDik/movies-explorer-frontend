// ШАПКА САЙТА
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, isLanding }) {
  return (
    <header className={`header ${isLanding ? "header_type_landing" : ""}`}>
      <div className="header__container">
        <Navigation isLoggedIn={isLoggedIn} isLanding={isLanding} />
      </div>
    </header>
  );
}

export default Header;
