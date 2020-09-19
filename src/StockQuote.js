import React from "react";
import "./App.css";
import StockAttribute from "./StockAttribute.js";
import StockQuoteInput from "./StockQuoteInput.js";
import StockBuy from "./StockBuy.js";

class StockQuote extends React.Component {
  state = {
    symbol: "",
    name: "",
    exchange: "",
    industry: "",
    previousClose: "",
    currentPrice: "",
    symbolNotFound: false,
    quantity: 0,
    message: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleQuoteSubmit = (event) => {
    event.preventDefault();

    this.setState({ message: "" });

    debugger;

    fetch("http://localhost:3000/stock_quote/" + this.state.symbol)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          name: json.name,
          exchange: json.exchange,
          industry: json.industry,
          previousClose: json.previous_close,
          currentPrice: json.current_price,
        });
      });
  };

  handlePurchaseSubmit = (event) => {
    event.preventDefault();

    const json = {
      user_id: 1,
      symbol: this.state.symbol,
      total_shares: parseInt(this.state.quantity),
      is_sell: false,
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
        if (json.message === "insufficient_balance") {
          this.setState({ message: "Insufficient balance!" });
        } else if (json.message === "input_error") {
          this.setState({ message: "Input error!" });
        } else {
          this.setState({ message: "Success!" });
        }
      });
  };

  render() {
    return (
      <div className="card text-white bg-dark mb-3" style={{ width: "24rem" }}>
        <div className="card-header">Get a Quote!</div>
        <div className="card-body text-left">
          <StockQuoteInput
            formData={this.state.symbol}
            handleChange={this.handleChange}
            handleSubmit={this.handleQuoteSubmit}
          />

          <StockAttribute
            attributeName="Name"
            attributeValue={this.state.name}
          />
          <StockAttribute
            attributeName="Exchange"
            attributeValue={this.state.exchange}
          />
          <StockAttribute
            attributeName="Industry"
            attributeValue={this.state.industry}
          />
          <StockAttribute
            attributeName="Previous Close (USD $)"
            attributeValue={this.state.previousClose}
          />
          <StockAttribute
            attributeName="Current Price (USD $)"
            attributeValue={this.state.currentPrice}
          />

          {this.state.name ? (
            <StockBuy
              formData={this.state.quantity}
              handleChange={this.handleChange}
              handleSubmit={this.handlePurchaseSubmit}
            />
          ) : (
            ""
          )}

          {this.state.message === "Success!" ? (
            <div className="badge badge-success text-center">
              {this.state.message}
            </div>
          ) : (
            ""
          )}

          {this.state.message !== "Success!" && this.state.message ? (
            <div className="badge badge-danger text-center">
              {this.state.message}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default StockQuote;
