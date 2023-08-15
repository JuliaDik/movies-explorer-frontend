// СТУДЕНТ (секция)
import Container from "../Container/Container";
import photo from "../../images/student.png";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="student" id="student" aria-label="о студенте">
      <Container>
        <h2 className="student__title">Студент</h2>
        <div className="student__info">
          <h3 className="student__name">Виталий</h3>
          <p className="student__brief">Фронтенд-разработчик, 30 лет</p>
          <p className="student__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="student__github"
            href="https://github.com/JuliaDik"
            target="_blunk"
          >
            Github
          </a>
          <figure className="student__photo-wrapper">
            <img className="student__photo" src={photo} alt="Фото студента" />
          </figure>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
