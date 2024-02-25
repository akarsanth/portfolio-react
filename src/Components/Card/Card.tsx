import { Outlet } from "react-router-dom";
import "./Card.css";
import Navigation from "../Navigation/Navigation";

const Card = () => {
  return (
    <main className="card">
      <div className="card__content">
        <Outlet />
      </div>
      <Navigation />
    </main>
  );
};

export default Card;
