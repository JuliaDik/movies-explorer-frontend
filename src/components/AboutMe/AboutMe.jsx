// СТУДЕНТ (лэндинг)
import photo from "../../images/student.jpg";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me" id="student" aria-label="о студенте">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <figure className="about-me__photo-wrapper">
            <img className="about-me__photo" src={photo} alt="Диколенко Юлия" />
          </figure>
          <h3 className="about-me__name">Юлия</h3>
          <p className="about-me__brief-text">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__full-text">
            Фронтенд-разработкой заинтересовалась на текущей работе, когда
            обсуждался вопрос создания нового сайта организации. Любопытство
            привело меня через различные образовательные платформы на курс по
            веб-разработке от Яндекс.Практикума. Теперь есть большое желание
            воплотить хобби в работу.
          </p>
          <a
            className="about-me__github-link link"
            href="https://github.com/JuliaDik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

