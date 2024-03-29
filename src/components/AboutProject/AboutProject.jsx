// О ПРОЕКТЕ (лэндинг)
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="project" aria-label="о проекте">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__info">
          <h3 className="about-project__heading">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
          <h3 className="about-project__heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
        <div className="about-project__timeline">
          <div className="about-project__week">1 неделя</div>
          <div className="about-project__week">4 недели</div>
        </div>
        <div className="about-project__captions">
          <span className="about-project__caption">Back-end</span>
          <span className="about-project__caption">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
