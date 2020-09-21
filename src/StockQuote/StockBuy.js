import React from "react";
import "../App.css";

const StockBuy = (props) => {
  return (
    <form className="form-inline" onSubmit={props.handleSubmit}>
      <label htmlFor="quantity">Enter Quantity to Purchase: </label>
      <input
        type="number"
        min="0"
        name="quantity"
        id="quantity"
        className="form-control mx-sm-3"
        style={{ width: "5rem" }}
        onChange={(event) => props.handleChange(event)}
        value={props.formData.quantity}
      />
    </form>
  );
};

export default StockBuy;
