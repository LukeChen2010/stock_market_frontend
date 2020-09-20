import React from "react";
import "./App.css";
import StockQuote from "./StockQuote/StockQuote.js";
import Profile from "./Profile/Profile.js";
import StockList from "./StockList/StockList.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Profile />
        <StockQuote />
        <StockList />
      </div>
    );
  }
}

export default App;
