import React from "react";
import "../App.css";
import TransactionRow from "./TransactionRow.js";

class TransactionList extends React.Component {
  state = {
    transactions: [],
  };

  fetchProfile = () => {
    fetch("http://localhost:3000/users/1/transactions")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          transactions: json,
        });
      });
  };

  componentDidMount() {
    this.fetchProfile();
  }

  renderTableRows() {
    return this.state.transactions.map((transaction) => (
      <TransactionRow transaction={transaction} />
    ));
  }

  render() {
    return (
      <div className="card border-dark mb-3">
        <div className="card-header display-4">Your Transactions</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Symbol</th>
              <th scope="col">Shares</th>
              <th scope="col">Price Paid (USD $)</th>
              <th scope="col">Price Paid Per Share (USD $)</th>
              <th scope="col">Buy/Sell</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
      </div>
    );
  }
}

export default TransactionList;
