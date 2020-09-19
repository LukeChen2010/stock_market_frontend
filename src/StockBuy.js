import React from "react";
import "./App.css";

class StockBuy extends React.Component {
  render() {
    return (
      <form className="form-inline" onSubmit={this.props.handleSubmit}>
        <label htmlfor="quantity">Enter Quantity to Purchase: </label>
        <input
          type="number"
          min="0"
          name="symbol"
          id="quantity"
          className="form-control mx-sm-3"
          style={{ width: "5rem" }}
          onChange={(event) => this.props.handleChange(event)}
          value={this.props.formData.quantity}
        />
      </form>
    );
  }
}

export default StockBuy;
