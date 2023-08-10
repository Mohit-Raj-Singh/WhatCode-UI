import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignUp } from "../Components/SignUp";
import { Login } from "../Components/Login";
import { CitySelection } from "../Components/CitySelection";
import { Book } from "./Book";
import { SearchResult } from "./SearchResult";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/city" element={<CitySelection />} />
      <Route path="/book/:city" element={<Book />} />
      <Route path="/:city" element={<SearchResult />} />
    </Routes>
  );
};
