import React from "react";

function ExerciseCard(props) {
  return (
    <div className="exercise-card">
      <h3>{props.name}</h3>
      <img src={props.img} alt="" />
      <p>{props.bodypart}</p>
    </div>
  );
}

export default ExerciseCard;
