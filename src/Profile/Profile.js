import React from "react";
import "../App.css";

class Profile extends React.Component {
  state = {
    portfolioValue: "",
    balance: "",
  };

  componentDidMount() {
    this.interval = setInterval(this.fetchProfile(), 15000);
  }

  fetchProfile = () => {
    fetch("http://localhost:3000/users/1")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          portfolioValue: json.portfolio_value,
          balance: json.balance,
        });
      });
  };

  render() {
    return (
      <div>
        <div className="card border-dark mb-3" style={{ width: "24rem" }}>
          <div className="card-header display-4">Your Portfolio</div>{" "}
          <div className="card-body text-left">
            <div>
              Portfolio Value (USD $):{" "}
              <span className="badge badge-success">
                {this.state.portfolioValue}
              </span>
            </div>
            <div>
              Available to Spend (USD $):{" "}
              <span className="badge badge-success">{this.state.balance}</span>{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
