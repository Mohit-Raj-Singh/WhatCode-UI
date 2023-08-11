import React from "react";
import "../Styles/CartPayment.css";
import { BlurShooping } from "./BlurShopping";
import { PaymentPage } from "./PaymentPage";

export const CartPayment = () => {
  return (
    <div className="container">
      <div className="blur-background">
        <BlurShooping />
      </div>
      <div className="centered-image">
        <PaymentPage />
      </div>
    </div>
  );
};
