import React, { useEffect, useState } from "react";
import { AreaMap } from "../Components/AreaMap";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Book = () => {
  const cityName = useParams();
  const [getCityData, setGetCityData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(cityName);

  const fetchCityData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://clever-polo-shirt-toad.cyclic.app/cities/${cityName.city}`
      );
      setGetCityData(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchCityData();
  },[])

  

  return (
    <div>
      <AreaMap data={getCityData} />
    </div>
  );
};
