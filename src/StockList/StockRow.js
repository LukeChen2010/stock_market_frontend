import React from "react";
import "../App.css";
import StockSell from "./StockSell.js";

const StockRow = (props) => {
  return (
    <React.Fragment>
      <tr
        onClick={() => {
          if (props.selectedStockId === props.stock.id) {
            props.selectStock(null, "");
          } else {
            props.selectStock(props.stock.id, props.stock.symbol);
          }
        }}
      >
        <th scope="row">{props.stock.symbol}</th>
        <td>
          <span className="badge badge-primary">
            {props.stock.total_shares}
          </span>
        </td>
        <td>
          <span className="badge badge-primary">{props.stock.total_price}</span>
        </td>
        <td>
          <span className="badge badge-primary">
            {props.stock.previous_close}
          </span>
        </td>
        <td>
          <span className="badge badge-primary">
            {props.stock.current_price}
          </span>
        </td>
        <td>
          <span
            className={
              props.stock.daily_change >= 0
                ? "badge badge-success"
                : "badge badge-danger"
            }
          >
            {props.stock.daily_change}
          </span>
        </td>
        <td>
          <span className="badge badge-primary">
            {props.stock.current_value}
          </span>
        </td>
        <td>
          <span
            className={
              props.stock.total_gain_loss >= 0
                ? "badge badge-success"
                : "badge badge-danger"
            }
          >
            {props.stock.total_gain_loss}
          </span>
        </td>
      </tr>

      {props.stock.id === props.selectedStockId ? (
        <StockSell
          formData={props.formData}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      ) : null}
    </React.Fragment>
  );
};

export default StockRow;
