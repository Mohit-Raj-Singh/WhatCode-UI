import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AreaMap } from "../Components/AreaMap";

export const SearchResult = () => {
  const cityName = useParams();
  const [getCityData, setGetCityData] = useState([]);
  const [loading, setLoading] = useState(true);

  function convertCity(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

  const fetchCityData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://clever-polo-shirt-toad.cyclic.app/cities/${convertCity(cityName.city)}`
      );
      setGetCityData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  return (
    <div>
      <AreaMap data={getCityData} />
    </div>
  );
};
