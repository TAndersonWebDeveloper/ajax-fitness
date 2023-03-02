import React from "react";
import "./Amenity.css";
function Amenity(props) {
  return (
    <div className="amenity">
      {props.icon}
      <p>{props.description}</p>
    </div>
  );
}

export default Amenity;
