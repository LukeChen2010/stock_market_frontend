import React from "react";
import "../App.css";
import StockSell from "./StockSell.js";

class StockRow extends React.Component {
  handleClick() {
    this.props.selectStock(this.props.stock.id);
  }

  render() {
    return (
      <React.Fragment>
        <tr
          onClick={() => {
            this.handleClick();
          }}
        >
          <th scope="row">{this.props.stock.symbol}</th>
          <td>
            <span className="badge badge-primary">
              {this.props.stock.total_shares}
            </span>
          </td>
          <td>
            <span className="badge badge-primary">
              {this.props.stock.total_price}
            </span>
          </td>
          <td>
            <span className="badge badge-primary">
              {this.props.stock.previous_close}
            </span>
          </td>
          <td>
            <span className="badge badge-primary">
              {this.props.stock.current_price}
            </span>
          </td>
          <td>
            <span
              className={
                this.props.stock.daily_change >= 0
                  ? "badge badge-success"
                  : "badge badge-danger"
              }
            >
              {this.props.stock.daily_change}
            </span>
          </td>
          <td>
            <span className="badge badge-primary">
              {this.props.stock.current_value}
            </span>
          </td>
          <td>
            <span
              className={
                this.props.stock.total_gain_loss >= 0
                  ? "badge badge-success"
                  : "badge badge-danger"
              }
            >
              {this.props.stock.total_gain_loss}
            </span>
          </td>
        </tr>

        {this.props.stock.id === this.props.selectedStockId ? (
          <StockSell symbol={this.props.stock.symbol} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default StockRow;
