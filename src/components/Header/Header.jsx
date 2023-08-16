// ШАПКА САЙТА
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Container>
        <div className="header__items">
          <NavLink className="header__logo" to="/"/>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}

export default Header;