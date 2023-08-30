// АУТЕНТИФИКАЦИЯ
import { NavLink } from "react-router-dom";
import "./Auth.css";

function Auth({
  greeting,
  question,
  link,
  route,
  children,
}) {
  return (
    <main className="authentication">
      <div className="authentication__content">
        <NavLink className="authentication__logo button" to="/" />
        <h2 className="authentication__greeting">{greeting}</h2>
        {children}
        <p className="authentication__question">{question} {""}
          <NavLink className="authentication__link link" to={route}>{link}</NavLink>
        </p>
      </div>
    </main>
  );
}

export default Auth;
