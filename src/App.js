import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import StockQuote from "./StockQuote/StockQuote.js";
import Profile from "./Profile/Profile.js";
import StockList from "./StockList/StockList.js";
import TransactionList from "./TransactionList/TransactionList.js";
import Navbar from "./Navbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile />
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
