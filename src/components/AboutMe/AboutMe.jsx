// СТУДЕНТ
import Container from "../Container/Container";
import photo from "../../images/student.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="student" id="student" aria-label="о студенте">
      <Container>
        <h2 className="student__title">Студент</h2>
        <div className="student__info">
          <h3 className="student__name">Юлия</h3>
          <p className="student__brief">Фронтенд-разработчик, 28 лет</p>
          <p className="student__paragraph">
            Фронтенд-разработкой заинтересовалась на текущей работе, когда
            обсуждался вопрос создания нового сайта организации. Любопытство
            вывело меня через различные образовательные платформы на курс по
            веб-разработке от Яндекс.Практикума. Есть огромное желание
            воплотить хобби в работу.
          </p>
          <a
            className="student__github link"
            href="https://github.com/JuliaDik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <figure className="student__figure">
            <img className="student__photo" src={photo} alt="Фото студента" />
          </figure>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
