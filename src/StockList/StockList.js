import React from "react";
import { connect } from "react-redux";
import "../App.css";
import StockRow from "./StockRow.js";

class StockList extends React.Component {
  state = {
    stocks: [],
    selectedStockId: null,
    selectedStockSymbol: "",
    quantity: 0,
    message: "",
  };

  fetchStocks = () => {
    fetch("http://localhost:3000/users/1/stocks")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          stocks: json,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSellSubmit = (event) => {
    event.preventDefault();

    const json = {
      symbol: this.state.selectedStockSymbol,
      total_shares: parseInt(this.state.quantity),
      is_sell: true,
    };

    fetch("http://localhost:3000/users/1/transactions/new", {
      headers: {
        Authorization: "authenticity_token",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(json),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "insufficient_shares") {
          this.setState({ message: "Insufficient shares!" });
        } else if (json.message === "input_error") {
          this.setState({ message: "Input error!" });
        } else {
          this.setState({ message: "Success!" });
        }
      });
  };

  componentDidMount() {
    this.interval = setInterval(this.fetchStocks, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  selectStock = (id, symbol) => {
    this.setState({
      selectedStockId: id,
      selectedStockSymbol: symbol,
    });
  };

  renderTableRows() {
    return this.state.stocks.map((stock) => (
      <StockRow
        formData={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSellSubmit}
        selectedStockId={this.state.selectedStockId}
        selectStock={this.selectStock}
        stock={stock}
        key={stock.id}
      />
    ));
  }

  render() {
    return (
      <div
        className={
          this.props.darkMode
            ? "card text-white bg-dark mb-3"
            : "card bg-light mb-3"
        }
      >
        <div
          onClick={() => this.setState({ selectedStockId: null })}
          className="card-header display-4"
        >
          Your Stocks
        </div>
        <table className={this.props.darkMode ? "table text-white" : "table"}>
          <thead onClick={() => this.setState({ selectedStockId: null })}>
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

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(StockList);
