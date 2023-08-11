import React from "react";
import "../Styles/ShopingBag.css";
import { NavbarCity } from "./NavbarCity";
import greenDot from "../assets/Ellipse 4.png";
import orangeDot from "../assets/Ellipse 43.png";
import greyDot from "../assets/Ellipse.png";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export const ShoppingBag = ({ data }) => {
  // console.log(data);

  const navigate=useNavigate();

  function formatAmount(amount) {
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }

  const navigateLast=()=>{
    navigate("/payment")
  }

  return (
    <div>
      <NavbarCity />
      <div className="checkBoxB">Shopping Bag - Checkout 🛒</div>

      {data.map((item) => (
        <div className="itemsBoxMainB" key={item.id}>
          <div className="twentyFiveBoxB">
            <div>
              <img src={greenDot} alt="" />
            </div>
            <div className="twentyNumberB">{formatAmount(item.rate)}</div>
            <div className="vB">v</div>
          </div>
          <div className="quantityBoxB">
            {`${item.city} | Quantity - ${item.area} sq-mt | Stall Type Details`}
            {/* Raipur | Quantity - 3 | Stall Type Details */}
          </div>
          <div className="termsBoxB">
            Terms and Conditions - Select your favorite social network and share
            our icons with your contacts or friends. If you don’t have these
            social networks
          </div>
          <div className="orangeBoxMainB">
            <div className="twentyFiveOrangeB">
              <div>
                <img src={orangeDot} alt="" />
              </div>
              <div className="twentyNumberOrnageB">
                {formatAmount(item.rate)}
              </div>
              <div className="vB">v</div>
            </div>
            <div className="oneCircleB">1</div>
          </div>
          <div className="orangeBoxMainB">
            <div className="twentyFiveGreyB">
              <div>
                <img src={greyDot} alt="" />
              </div>
              <div className="twentyNumberGreyB">{formatAmount(item.rate)}</div>
              <div className="vB">v</div>
            </div>
            <div className="oneCircleB">3</div>
          </div>
        </div>
      ))}

      <Footer data={data} />
      <div className="payNowButtonB" onClick={navigateLast}>Pay Now</div>
    </div>
  );
};
