import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import StockQuote from "./StockQuote/StockQuote.js";
import Portfolio from "./Portfolio/Portfolio.js";
import StockList from "./StockList/StockList.js";
import TransactionList from "./TransactionList/TransactionList.js";
import Navbar from "./Navbar";
import DarkMode from "./DarkMode";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DarkMode />
        <Portfolio />
        <StockQuote />
        <Router>
          <div>
            <Navbar />
            <Route exact path="/stocks" component={StockList} />
            <Route exact path="/transactions" component={TransactionList} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
