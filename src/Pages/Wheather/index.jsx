import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Components/Header";
import { fetchingWheatherData } from "../../Store/Actions/WheatherApp";

export const Wheather = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);
  dispatch(fetchingWheatherData());
  return (
    <>
      <Header />
    </>
  );
};
