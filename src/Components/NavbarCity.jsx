import React from "react";
import "./NavbarCity.css";
import logo from "../assets/REFLECT 1.png";
import pin from "../assets/location-pin 1.png";

export const NavbarCity = () => {
  return (
    <div>
      <div className="navbarE">
        <div className="noneE"></div>
        <div className="logoboxE">
          <img src={logo} alt="" />
        </div>
        <div className="locationBTNE">
          <div className="cityE">City Select</div>
          <div className="pinImge">
            <img src={pin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
