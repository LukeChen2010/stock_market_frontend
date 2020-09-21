import React from "react";
import "../App.css";

const StockQuoteInput = (props) => {
  return (
    <form className="form-inline" onSubmit={props.handleSubmit}>
      <label htmlFor="symbol">Enter Symbol: </label>
      <input
        type="text"
        name="symbol"
        id="symbol"
        className="form-control mx-sm-3"
        style={{ width: "5rem" }}
        onChange={(event) => props.handleChange(event)}
        value={props.formData.symbol}
      />
    </form>
  );
};

export default StockQuoteInput;
