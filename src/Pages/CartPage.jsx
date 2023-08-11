import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShoppingBag } from "../Components/ShoppingBag";
import Loader from "../Components/Loader";

export const CartPage = () => {
  const { item } = useParams();
  const [getData, setGetData] = useState([]);
  const [loading, setLoading] = useState(true);
  //   console.log(item);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://clever-polo-shirt-toad.cyclic.app/cities/${item}`
      );
      setGetData(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log(getData);
  }, []);

  return <div>{loading ? <Loader /> : <ShoppingBag data={getData} />}</div>;
};
