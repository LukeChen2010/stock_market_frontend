import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/stocks" exact className="btn btn-light">
          Stocks
        </NavLink>
        <NavLink to="/transactions" exact className="btn btn-light">
          Transactions
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
