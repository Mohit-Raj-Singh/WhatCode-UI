import React from "react";
import "../Styles/NavbarCity.css";
import logo from "../assets/REFLECT 1.png";
import pin from "../assets/location-pin 1.png";
import { useNavigate } from "react-router-dom";

export const NavbarCity = () => {
  const navigate = useNavigate();

  const navigateToCity = () => {
    navigate("/city");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="navbarE">
        <div className="noneE"></div>
        <div className="logoboxE" onClick={navigateToHome}>
          <img src={logo} alt="" />
        </div>
        <div className="locationBTNE" onClick={navigateToCity}>
          <div className="cityE">City Select</div>
          <div className="pinImge">
            <img src={pin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
