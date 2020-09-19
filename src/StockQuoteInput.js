import React from "react";
import "./App.css";

class StockQuoteInput extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <span>Enter Symbol: </span>
        <input
          type="text"
          name="symbol"
          style={{ width: "5rem" }}
          onChange={(event) => this.props.handleChange(event)}
          value={this.props.formData.symbol}
        />
      </form>
    );
  }
}

export default StockQuoteInput;
