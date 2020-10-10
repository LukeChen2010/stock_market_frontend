import React from "react";
import { connect } from "react-redux";

class DarkMode extends React.Component {
  handleInputChange = (event) => {
    this.props.dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  render() {
    return (
      <div className="custom-control custom-switch float-right">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          onChange={this.handleInputChange}
        ></input>
        <label className="custom-control-label" htmlFor="customSwitch1">
          Dark Mode
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(DarkMode);
