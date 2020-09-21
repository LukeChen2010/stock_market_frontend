import React from "react";
import "../App.css";

class StockSell extends React.Component {
  render() {
    return (
      <React.Fragment>
        {"INTERFACE TO SELL STOCK HERE" + this.props.symbol}
        <tr></tr>
      </React.Fragment>
    );
  }
}

export default StockSell;
