import React from "react";
import "../Styles/Footer.css"

export const Footer = () => {
  return (
    <div>
      <div className="footerboxE">
        <div className="footerParaE">
          We levy a 50% Advance on all our Stall sales. The rest 50% shall be
          credited post the event.
        </div>
        <div className="subtotalBoxMain">
          <div className="subTotal">Subtotal</div>
          <div className="subTotalNumber">₹3,20,000.00</div>
        </div>
        <div className="subtotalBoxMain">
          <div className="subTotal">Tax</div>
          <div className="subTotalNumber">₹32,000.00</div>
        </div>
        <div className="subtotalBoxMain">
          <div className="total">TOTAL</div>
          <div className="totalNumber">₹3,52,000.00</div>
        </div>
      </div>
    </div>
  );
};
