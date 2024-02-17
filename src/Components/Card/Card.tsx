import { Outlet } from "react-router-dom";
import "./Card.css";
import Navigation from "../Navigation/Navigation";

const Card = () => {
  return (
    <div className="card">
      <Outlet />
      <Navigation />
    </div>
  );
};

export default Card;
