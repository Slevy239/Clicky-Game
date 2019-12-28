import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image}onClick={() => props.shuffleCard(props.id)} />
      </div>
    </div>
  );
}

export default Card;
