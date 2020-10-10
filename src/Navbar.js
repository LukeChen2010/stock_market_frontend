import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

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
        <NavLink
          to="/stocks"
          exact
          className={this.props.darkMode ? "btn btn-dark" : "btn btn-light"}
        >
          Stocks
        </NavLink>
        <NavLink
          to="/transactions"
          exact
          className={this.props.darkMode ? "btn btn-dark" : "btn btn-light"}
        >
          Transactions
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(Navbar);
