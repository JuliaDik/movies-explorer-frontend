// О ПРОЕКТЕ
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="about" aria-label="о проекте">
      <div className="about__container">
        <h2 className="about__title">О проекте</h2>
        <div className="about__info">
          <div className="about__column">
            <h3 className="about__heading">Дипломный проект включал 5 этапов</h3>
            <p className="about__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__column">
            <h3 className="about__heading">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__timeline">
          <div className="about__week">1 неделя</div>
          <div className="about__week">4 недели</div>
        </div>
        <div className="about__captions">
          <span className="about__caption">Back-end</span>
          <span className="about__caption">Front-end</span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
