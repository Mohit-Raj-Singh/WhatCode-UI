import React from "react";
import "../Styles/CartPayment.css"
import payment from "../assets/image 6.png";
import { ShoppingBag } from "./ShoppingBag";

export const CartPayment = () => {
  return (
    <div className="container">
      <div className="blur-background">
        <ShoppingBag />
      </div>
      <img className="centered-image" src={payment} alt="Centered" />
    </div>
  );
};
