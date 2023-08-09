import React from "react";
import "./CitySelection.css";
import logo from "../assets/REFLECT 1.png";
import cart from "../assets/cart bag.png";
import location from "../assets/location.png";
import { AiOutlineSearch } from "react-icons/ai";
import house from "../assets/house.png";
import goto from "../assets/goto.png";

export const CitySelection = () => {
  return (
    <div>
      <div className="navbarC">
        <div className="noneC"></div>
        <div className="logoBoxC">
          <img src={logo} alt="" className="logoC" />
        </div>
        <div className="cartBtn">
          <div className="goCart">Go to Cart</div>
          <div className="cartIC">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>

      <div className="locationC">
        <div className="selectC">Select your Location</div>
        <div className="locIC">
          <img src={location} alt="" />
        </div>
      </div>

      <div className="searchBox">
        <div className="searchC">Search</div>
        <div>
          <AiOutlineSearch className="iconSearch" />
        </div>
      </div>
      <div className="cities">
        <div className="city1">
          <div className="houseImg">
            <img src={house} alt="" />
          </div>
          <div className="cityDetails">
            <div className="cityName">Raipur</div>
            <div className="date">10/11/2023</div>
            <div className="bookRaipur">Book Now</div>
          </div>
          <div className="gotoIcon">
            <img src={goto} alt="" />
          </div>
        </div>
        <div className="city1">
          <div className="houseImg">
            <img src={house} alt="" />
          </div>
          <div className="cityDetails">
            <div className="cityName">Haryana</div>
            <div className="date">09/12/2023</div>
            <div className="book">Book Now</div>
          </div>
          <div className="gotoIcon">
            <img src={goto} alt="" />
          </div>
        </div>
        <div className="city1">
          <div className="houseImg">
            <img src={house} alt="" />
          </div>
          <div className="cityDetails">
            <div className="cityName">Amritsar</div>
            <div className="date">02/01/2024</div>
            <div className="book">Book Now</div>
          </div>
          <div className="gotoIcon">
            <img src={goto} alt="" />
          </div>
        </div>
        <div className="city1">
          <div className="houseImg">
            <img src={house} alt="" />
          </div>
          <div className="cityDetails">
            <div className="cityName">Nagpur</div>
            <div className="date">18/11/2024</div>
            <div className="book">Book Now</div>
          </div>
          <div className="gotoIcon">
            <img src={goto} alt="" />
          </div>
        </div>
        <div className="city1">
          <div className="houseImg">
            <img src={house} alt="" />
          </div>
          <div className="cityDetails">
            <div className="cityName">Pune</div>
            <div className="date">22/11/2024</div>
            <div className="book">Book Now</div>
          </div>
          <div className="gotoIcon">
            <img src={goto} alt="" />
          </div>
        </div>
        <div className="city1">
          <div className="houseImg">
            <img src={house} alt="" />
          </div>
          <div className="cityDetails">
            <div className="cityName">Nashik</div>
            <div className="date">01/15/2024</div>
            <div className="book">Book Now</div>
          </div>
          <div className="gotoIcon">
            <img src={goto} alt="" />
          </div>
        </div>
        <div className="city1">
          <div className="houseImg">
            <img src={house} alt="" />
          </div>
          <div className="cityDetails">
            <div className="cityName">Goa</div>
            <div className="date">05/05/2024</div>
            <div className="book">Book Now</div>
          </div>
          <div className="gotoIcon">
            <img src={goto} alt="" />
          </div>
        </div>
      </div>
      <div className="footerC">
        <div className="notFound">
          Not found the City you were looking for 😕?
        </div>
      </div>
    </div>
  );
};
