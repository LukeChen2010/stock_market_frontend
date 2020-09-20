import React from "react";
import "../App.css";

class StockQuoteInput extends React.Component {
  render() {
    return (
      <form className="form-inline" onSubmit={this.props.handleSubmit}>
        <label htmlFor="symbol">Enter Symbol: </label>
        <input
          type="text"
          name="symbol"
          id="symbol"
          className="form-control mx-sm-3"
          style={{ width: "5rem" }}
          onChange={(event) => this.props.handleChange(event)}
          value={this.props.formData.symbol}
        />
      </form>
    );
  }
}

export default StockQuoteInput;
