import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  componentDidUpdate() {
    document.body.style.backgroundColor = this.props.darkMode
      ? "#5c5c5c"
      : "#ffffff";
  }

  render() {
    return (
      <div
        className={
          this.props.darkMode
            ? "jumbotron jumbotron-fluid text-white bg-dark mb-3"
            : "jumbotron jumbotron-fluid  bg-light mb-3"
        }
      >
        <div className="container">
          <h1 className="display-3">Stock Market Playground</h1>
          <p className="lead">The Free Virtual Stock Trading Game</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(Header);
