import React from "react";
import "../App.css";

const TransactionRow = (props) => {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.transaction.symbol}</th>
        <td>
          <span className="badge badge-primary">
            {props.transaction.is_sell ? "Sell" : "Buy"}
          </span>
        </td>
        <td>
          <span className="badge badge-primary">
            {props.transaction.total_shares}
          </span>
        </td>
        <td>
          <span className="badge badge-primary">
            {props.transaction.total_price}
          </span>
        </td>
        <td>
          <span className="badge badge-primary">
            {(
              props.transaction.total_price / props.transaction.total_shares
            ).toFixed(2)}
          </span>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default TransactionRow;
