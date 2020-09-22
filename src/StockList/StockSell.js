import React from "react";
import "../App.css";

class StockSell extends React.Component {
  state = {
    quantity: 0,
    message: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const json = {
      user_id: 1,
      symbol: this.props.symbol,
      total_shares: parseInt(this.state.quantity),
      is_sell: true,
    };

    console.log(JSON.stringify(json));

    fetch("http://localhost:3000/users/1/transactions/new", {
      headers: {
        Authorization: "authenticity_token",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(json),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.message === "insufficient_shares") {
          this.setState({ message: "Insufficient shares!" });
        } else if (json.message === "input_error") {
          this.setState({ message: "Input error!" });
        } else {
          this.setState({ message: "Success!" });
        }
      });
  };

  render() {
    return (
      <React.Fragment>
        <tr>
          <td className="text-left" colspan={8}>
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <label htmlFor="quantity">Enter Quantity to Sell: </label>
              <input
                type="number"
                min="0"
                name="quantity"
                id="quantity"
                className="form-control mx-sm-3"
                style={{ width: "5rem" }}
                onChange={(event) => this.handleChange(event)}
                value={this.state.quantity}
              />
            </form>
            {this.state.message ? (
              <div
                className={
                  this.state.message === "Success!"
                    ? "badge badge-success"
                    : "badge badge-danger"
                }
              >
                {this.state.message}
              </div>
            ) : (
              ""
            )}
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default StockSell;
