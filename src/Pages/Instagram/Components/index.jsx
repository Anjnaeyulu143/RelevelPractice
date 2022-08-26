import React, { useEffect } from "react";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Gallery } from "./Gallery";
import { Modal } from "../../Modal";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "@mui/material";
import { instagramData } from "../../../Store/Actions/InstagramApp";

export const Instagram = () => {
  const { boolean } = useSelector((state) => state.instagramReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(instagramData());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Divider />
      <Profile />
      <Gallery />

      {boolean && <Modal />}
    </div>
  );
};
