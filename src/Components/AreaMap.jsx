import React, { useState } from "react";
import "../Styles/AreaMap.css";
import { NavbarCity } from "./NavbarCity";
import { BsFillHouseDoorFill, BsHouseSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export const AreaMap = ({ data }) => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [notAvailable, setNotAvailable] = useState(false);
  const navigate = useNavigate();

  function formatAmount(amount) {
    return amount.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }

  const handleAvailableHover = () => {
    setIsAvailable(true);
  };

  const handleAvailableLeave = () => {
    setIsAvailable(false);
  };

  const handleNotAvailableHover = () => {
    setNotAvailable(true);
  };

  const handleNotAvailableLeave = () => {
    setNotAvailable(false);
  };

  const navigateBook = (cityname) => {
    navigate(`/cart/${cityname}`);
  };

  return (
    <div className="areamMainBox">
      <NavbarCity />

      {data.map((item) => (
        <div className="areaBoxes" key={item.id}>
          <div
            className={`box box1 ${notAvailable ? "hovered" : ""}`}
            onMouseEnter={handleNotAvailableHover}
            onMouseLeave={handleNotAvailableLeave}
          >
            {notAvailable ? (
              <>
                <BsHouseSlash className="houseICon2" />
                <br />
                <h1 className="headAppear2">Not Available</h1>
              </>
            ) : (
              <BsFillHouseDoorFill className="houseICon" />
            )}
          </div>
          <div
            className={`box box2 ${isAvailable ? "hovered" : ""}`}
            onMouseEnter={handleAvailableHover}
            onMouseLeave={handleAvailableLeave}
            onClick={() => navigateBook(item.city)}
          >
            {isAvailable ? (
              <div>
                <h1 className="headAppear">{item.city}</h1>
                <h3 className="headAppear">{`Rate/sq.mt:  ${formatAmount(
                  item.rate
                )}`}</h3>
                <h4 className="headAppear">{`Available Area: ${item.area} sq.mt`}</h4>
              </div>
            ) : (
              <BsFillHouseDoorFill className="houseICon" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
