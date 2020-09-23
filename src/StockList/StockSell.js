import React from "react";
import "../App.css";

const StockSell = (props) => {
  return (
    <React.Fragment>
      <tr>
        <td className="text-left" colSpan={8}>
          <form className="form-inline" onSubmit={props.handleSubmit}>
            <label htmlFor="quantity">Enter Quantity to Sell: </label>
            <input
              type="number"
              min="0"
              name="quantity"
              id="quantity"
              className="form-control mx-sm-3"
              style={{ width: "5rem" }}
              onChange={(event) => props.handleChange(event)}
              value={props.formData.quantity}
            />
          </form>
          {props.formData.message ? (
            <div
              className={
                props.formData.message === "Success!"
                  ? "badge badge-success"
                  : "badge badge-danger"
              }
            >
              {props.formData.message}
            </div>
          ) : (
            ""
          )}
        </td>
      </tr>
    </React.Fragment>
  );
};

export default StockSell;
