import React, { useState } from "react";
import "./Card.css";
function Card(props) {
  const [cardClicked, setCardClicked] = useState(false);
  const cardClickedHandled = (e) => {
    setCardClicked(!cardClicked);
  };
  return (
    <div
      className={`price-card ${!cardClicked ? "" : "clicked"} ${
        props.premiumPrice
      }`}
    >
      {!cardClicked && (
        <>
          <h3>{props.title}</h3>
          {props.icon}
          <p>{props.price}</p>
          <button onClick={cardClickedHandled}>Learn More</button>
        </>
      )}
      {cardClicked && (
        <>
          <h3>Amenities</h3>
          <ul>
            <li>{props.amenityOne}</li>
            <li>{props.amenityTwo}</li>
            <li>{props.amenityThree}</li>
          </ul>
          <button onClick={cardClickedHandled}>Back</button>
        </>
      )}
    </div>
  );
}

export default Card;
