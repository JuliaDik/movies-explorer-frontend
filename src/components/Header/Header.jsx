// ШАПКА САЙТА
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ isLoggedIn, isLanding }) {
  return (
    <header className={`header ${isLanding ? "header_type_landing" : ""}`}>
      <Container>
        <Navigation isLoggedIn={isLoggedIn} isLanding={isLanding} />
      </Container>
    </header>
  );
}

export default Header;
