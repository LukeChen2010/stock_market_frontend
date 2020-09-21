import React from "react";
import "../App.css";

const StockAttribute = (props) => {
  return (
    <div>
      {props.attributeName}:{" "}
      <span className="badge badge-primary">{props.attributeValue}</span>
    </div>
  );
};

export default StockAttribute;
