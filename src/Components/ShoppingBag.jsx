import React from "react";
import "./ShopingBag.css";
import { NavbarCity } from "./NavbarCity";
import greenDot from "../assets/Ellipse 4.png";
import orangeDot from "../assets/Ellipse 43.png";
import greyDot from "../assets/Ellipse.png";
import { Footer } from "./Footer";

export const ShoppingBag = () => {
  return (
    <div>
      <NavbarCity />
      <div className="checkBoxB">Shopping Bag - Checkout 🛒</div>
      <div className="itemsBoxMainB">
        <div className="twentyFiveBoxB">
          <div>
            <img src={greenDot} alt="" />
          </div>
          <div className="twentyNumberB">₹25,000</div>
          <div className="vB">v</div>
        </div>
        <div className="quantityBoxB">
          Raipur | Quantity - 3 | Stall Type Details
        </div>
        <div className="termsBoxB">
          Terms and Conditions - Select your favorite social network and share
          our icons with your contacts or friends. If you don’t have these
          social networks
        </div>
        <div className="orangeBoxMainB">
            <div className="twentyFiveOrangeB">
                <div><img src={orangeDot} alt="" /></div>
                <div className="twentyNumberOrnageB">₹25,000</div>
                <div className="vB">v</div>
            </div>
            <div className="oneCircleB">1</div>
        </div>
        <div className="orangeBoxMainB">
            <div className="twentyFiveGreyB">
                <div><img src={greyDot} alt="" /></div>
                <div className="twentyNumberGreyB">₹25,000</div>
                <div className="vB">v</div>
            </div>
            <div className="oneCircleB">3</div>
        </div>
      </div>
      <Footer />
      <div className="payNowButtonB">
        Pay Now
      </div>
    </div>
  );
};
