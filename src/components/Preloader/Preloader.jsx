// ПРЕЛОАДЕР
// анимация загрузки (появляется в момент ожидания ответа от API)
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
}

export default Preloader;
