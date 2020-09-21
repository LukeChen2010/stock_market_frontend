import React from "react";
import "../App.css";
import StockRow from "./StockRow.js";

class StockList extends React.Component {
  state = {
    stocks: [],
    selectedStockId: null,
  };

  fetchProfile = () => {
    fetch("http://localhost:3000/users/1/stocks")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          stocks: json,
        });
      });
  };

  componentDidMount() {
    this.fetchProfile();
  }

  selectStock = (id) => {
    this.setState({
      selectedStockId: id,
    });
  };

  renderTableRows() {
    return this.state.stocks.map((stock) => (
      <StockRow
        selectStock={this.selectStock}
        selectedStockId={this.state.selectedStockId}
        stock={stock}
      />
    ));
  }

  render() {
    return (
      <div className="card border-dark mb-3">
        <div className="card-header display-4">Your Stocks</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Shares</th>
              <th scope="col">Price Paid (USD $)</th>
              <th scope="col">Previous Close (USD $)</th>
              <th scope="col">Current Price (USD $)</th>
              <th scope="col">Daily Change (USD $)</th>
              <th scope="col">Current Value (USD $)</th>
              <th scope="col">Total Gain/Loss (USD $)</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default StockList;
