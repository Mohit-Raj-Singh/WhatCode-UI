import React, { useEffect, useState } from "react";
import "../Styles/CitySelection.css";
import logo from "../assets/REFLECT 1.png";
import cart from "../assets/cart bag.png";
import location from "../assets/location.png";
import { AiOutlineSearch } from "react-icons/ai";
import house from "../assets/house.png";
import goto from "../assets/goto.png";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export const CitySelection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/${search}`);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const fetchCities = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://clever-polo-shirt-toad.cyclic.app/cities");
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const navigateBook = (cityname) => {
    navigate(`/book/${cityname}`);
  };

  const navigateToEcart = () => {
    navigate("/ecart");
  };

  const navigateToHome=()=>{
    navigate("/")
  }

  return (
    <div>
      <div className="navbarC">
        <div className="noneC"></div>
        <div className="logoBoxC" onClick={navigateToHome}>
          <img src={logo} alt="" className="logoC" />
        </div>
        <div className="cartBtn" onClick={navigateToEcart}>
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
        <input
          type="text"
          placeholder="Search"
          className={isFocused ? "borderDelete" : "searchInput"}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div>
          <AiOutlineSearch className="iconSearch" onClick={handleSearch} />
        </div>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="cities">
          {data.map((el) => (
            <div className="city1" key={el.id}>
              <div className="houseImg" onClick={() => navigateBook(el.city)}>
                <img src={house} alt="" />
              </div>
              <div
                className="cityDetails"
                onClick={() => navigateBook(el.city)}
              >
                <div className="cityName">{el.city}</div>
                <div className="date">10/11/2023</div>
                <div className="book">Book Now</div>
              </div>
              <div className="gotoIcon" onClick={() => navigateBook(el.city)}>
                <img src={goto} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="footerC">
        <div className="notFound">
          Not found the City you were looking for 😕?
        </div>
      </div>
    </div>
  );
};
