import React from "react";
import "../App.css";

class StockSell extends React.Component {
  render() {
    return (
      <React.Fragment>
        <tr>
          <td colspan={8}>
            {"INTERFACE TO SELL STOCK HERE" + this.props.symbol}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default StockSell;
