import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { CartItems } from "./Components/CartItems";
import Home from "./Components/Home";
import { fetchingProductList } from "../../Store/Actions/EcommerceActions";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Header } from "./Components/Header";

export const Ecommerce = () => {
  const dispatch = useDispatch();

  /* Fetching Products Data */

  const { data } = useQuery([], async () => {
    return axios.get("http://localhost:3004/EcommerseData/data/data.json");
  });

  /* dispatching fetchingProductsList Action */

  useEffect(() => {
    dispatch(fetchingProductList(data?.data));
  }, [dispatch, data?.data]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartitems" element={<CartItems />} />
      </Routes>
    </>
  );
};
