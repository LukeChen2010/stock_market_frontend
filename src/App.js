import React from "react";
import "./App.css";
import StockQuote from "./StockQuote.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StockQuote />
      </div>
    );
  }
}

export default App;
