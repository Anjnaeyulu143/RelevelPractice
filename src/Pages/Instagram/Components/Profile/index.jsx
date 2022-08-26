import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { images } from "../../../../Constants";

export const Profile = () => {
  const { user } = useSelector((state) => state.instagramReducer.data);

  console.log(user);

  return (
    <div className="br-2 margin-16 padding-16 flex-row-center flow">
      <div>
        <Avatar src={images.photo1} sx={{ width: 80, height: 80 }} />
      </div>
      <div>
        <h1 className="title-n">{user?.username}</h1>
        <div className="flow">
          <span>{user?.followers} followers</span>
          <span>{user?.following} following</span>
        </div>
        <h1 className="title-n">{user?.name}</h1>
        <div>
          <span>{user?.bio}</span>
        </div>
      </div>
    </div>
  );
};
