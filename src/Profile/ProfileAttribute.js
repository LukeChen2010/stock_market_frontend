import React from "react";
import "../App.css";

const ProfileAttribute = (props) => {
  return (
    <div>
      {props.attributeName}:{" "}
      <span className="badge badge-success">{props.attributeValue}</span>
    </div>
  );
};

export default ProfileAttribute;
