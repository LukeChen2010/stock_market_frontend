import React from "react";
import "../App.css";
import StockRow from "./StockRow.js";

class StockList extends React.Component {
  render() {
    return (
      <div className="card border-dark mb-3">
        <div className="card-header display-4">Your Stocks</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Shares</th>
              <th scope="col">Price Paid</th>
              <th scope="col">Previous Close</th>
              <th scope="col">Current Price</th>
              <th scope="col">Daily Change</th>
              <th scope="col">Current Value</th>
              <th scope="col">Total Gain/Loss</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default StockList;
