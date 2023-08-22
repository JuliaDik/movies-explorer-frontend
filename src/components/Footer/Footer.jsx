// ПОДВАЛ САЙТА
import Container from "../Container/Container";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <p className="footer__upper-text">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__bottom-text">
          <p className="footer__copyright">© 2023</p>
          <div className="footer__wrapper">
            <p className="footer__yandex">Яндекс.Практикум</p>
            <p className="footer__github">Github</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
