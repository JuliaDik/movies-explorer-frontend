// ШАПКА САЙТА
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ loggedIn }) {
  return (
    <header className="header">
      <Container>
        <div className="header__items">
          <NavLink className="header__logo" to="/" />
          <Navigation loggedIn={loggedIn}/>
        </div>
      </Container>
    </header>
  );
}

export default Header;
