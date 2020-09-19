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
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
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

  render() {
    return (
      <div className="card text-white bg-info mb-3" style={{ width: "24rem" }}>
        <div className="card-header">Get a Quote!</div>
        <div className="card-body">
          <StockQuoteInput
            formData={this.state.symbol}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
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
        </div>

        {this.state.name ? <StockBuy /> : ""}
      </div>
    );
  }
}

export default StockQuote;
