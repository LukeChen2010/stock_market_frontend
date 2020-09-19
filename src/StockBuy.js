import React from "react";
import "./App.css";

class StockBuy extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <span>Enter Quantity to Purchase: </span>
        <input
          type="number"
          min="0"
          name="quantity"
          style={{ width: "5rem" }}
          onChange={(event) => this.props.handleChange(event)}
          value={this.props.formData.quantity}
        />
      </form>
    );
  }
}

export default StockBuy;
