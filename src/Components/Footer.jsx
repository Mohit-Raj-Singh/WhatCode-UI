import React from "react";
import "../Styles/Footer.css";

export const Footer = ({ data }) => {
  // console.log(data[0].rate);

  function formatAmount(amount) {
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }

  return (
    <div>
      <div className="footerboxE">
        <div className="footerParaE">
          We levy a 50% Advance on all our Stall sales. The rest 50% shall be
          credited post the event.
        </div>
        <div className="subtotalBoxMain">
          <div className="subTotal">Subtotal</div>
          <div className="subTotalNumber">
            {formatAmount(data[0].rate * data[0].area)}
          </div>
        </div>
        <div className="subtotalBoxMain">
          <div className="subTotal">Tax</div>
          <div className="subTotalNumber">
            {formatAmount((data[0].rate * data[0].area * 28) / 100)}
          </div>
        </div>
        <div className="subtotalBoxMain">
          <div className="total">TOTAL</div>
          <div className="totalNumber">
            {formatAmount(
              data[0].rate * data[0].area +
                (data[0].rate * data[0].area * 28) / 100
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
