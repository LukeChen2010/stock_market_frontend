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
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleQuoteSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/stock_quote/" + this.state.symbol)
      .then((res) => res.json())
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
    alert();
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
              formData={this.state.symbol}
              handleChange={this.handleChange}
              handleSubmit={this.handlePurchaseSubmit}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default StockQuote;
