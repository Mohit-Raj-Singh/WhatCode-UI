import React from "react";
import "../Styles/PaymentPage.css";
import { useNavigate } from "react-router-dom";

export const PaymentPage = () => {
  const navigate = useNavigate();

  const success = () => {
    alert("Payment is successful");
    navigate("/");
  };

  return (
    <div>
      <div className="payment-container">
        <h2>Payment Information</h2>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              placeholder="Enter your card number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" />
          </div>
          {/* <button className="upi-button">UPI Payment</button> */}
          <button className="submit-button" onClick={success}>
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
};
