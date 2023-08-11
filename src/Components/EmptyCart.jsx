import React from "react";
import "../Styles/EmptyCart.css"
import cart from "../assets/image 5.png";
import { NavbarCity } from "./NavbarCity";
import { Footer } from "./Footer";

export const EmptyCart = () => {
  return (
    <div>
      <NavbarCity />

      <div className="checkBox">Shopping Bag - Checkout 🛒</div>
      <div className="cartImgBoxE">
        <div>
          <img src={cart} alt="" className="imgCartE" />
        </div>
        <div className="cartContentE">Add Items to cart to get Started!</div>
      </div>

<Footer />
    </div>
  );
};
