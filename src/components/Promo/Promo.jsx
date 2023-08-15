// БАННЕР (секция)
import "./Promo.css";

function Promo() {
  return (
    <section className="promo" aria-label="промо">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <div className="promo__background-image"></div>
    </section>
  );
}

export default Promo;
