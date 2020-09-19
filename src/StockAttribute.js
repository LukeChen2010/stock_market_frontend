import React from "react";
import "./App.css";

class StockAttribute extends React.Component {
  render() {
    return (
      <div>
        {this.props.attributeName}:{" "}
        <span className="badge badge-primary">{this.props.attributeValue}</span>
      </div>
    );
  }
}

export default StockAttribute;
