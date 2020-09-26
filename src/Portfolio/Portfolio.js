import React from "react";
import { connect } from "react-redux";
import "../App.css";
import { fetchProfile } from "../actions/fetchProfile";
import PortfolioAttribute from "./PortfolioAttribute.js";

class Portfolio extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.props.fetchProfile(), 1000);
  }

  render() {
    return (
      <div>
        <div className="card border-dark mb-3" style={{ width: "24rem" }}>
          <div className="card-header display-4">Your Portfolio</div>{" "}
          <div className="card-body text-left">
            <div>
              <PortfolioAttribute
                attributeName="Available to Spend (USD $):"
                attributeValue={this.props.balance}
              />
              <PortfolioAttribute
                attributeName=" Portfolio Value (USD $): "
                attributeValue={this.props.portfolio_value}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchProfile: () => dispatch(fetchProfile()) };
};

const mapStateToProps = (state) => {
  return {
    forceUpdate: state.forceUpdate,
    balance: state.profile.balance,
    portfolio_value: state.profile.portfolio_value,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
