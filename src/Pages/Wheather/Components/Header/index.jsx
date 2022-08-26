import { Divider } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { images } from "../../../../Constants";

import "./index.css";
import { v4 as uuidv4 } from "uuid";
import { SingleData } from "../SingleData";

const Header = () => {
  const { data } = useSelector((state) => state.wheatherReducer);

  const now = new Date();

  const month = now.toLocaleString("default", { month: "long" });

  const day = now.getDay();
  const year = now.getFullYear();

  console.log(month);
  console.log(day);
  console.log(year);

  const wheatherArr = [
    {
      id: uuidv4(),
      name: "humidity",
      data: `${data?.main.humidity}%`,
    },
    {
      id: uuidv4(),
      name: "pressure",
      data: `${data?.main.pressure}pha`,
    },
    {
      id: uuidv4(),
      name: "visibility",
      data: `${data.visibility}kms`,
    },
    {
      id: uuidv4(),
      name: "wind speed",
      data: `${data?.wind.speed}m/s`,
    },
  ];

  console.log(wheatherArr);

  return (
    <div className="margin-16">
      <div className="header__container">
        <div className="header__logo">
          <img src={images.wheatherlogo} className="image" alt="logo" />
        </div>
        <div>
          <h5>FORECASTER</h5>
        </div>
      </div>
      <Divider />
      <div className="margin-top-16 title-n">
        <span>{`${data?.name},  ${data?.sys.country}`}</span>
        <div className="header__date font-bold">
          <span>{`${month} ${day}, ${year}`}</span>
        </div>
        <div className="flex-row-layout">
          <div>
            <div className="font-bold">
              <span>{data?.weather[0].icon.slice(0, 2)}</span>
              <sup>o</sup>
              <span>C</span>
            </div>
            <div className="header__date font-bold">
              <span>{`Feels  like `}</span>
              <span>{data?.weather[0].icon.slice(0, 2)}</span>
              <sup>o</sup>
              <span>C</span>
            </div>
          </div>
          <div className="flex-row-layout flow-right">
            <h1>Rain</h1>
            <div style={{ height: "80px", width: "80px" }}>
              <img
                src={images.wheatherlogo}
                className="image"
                alt="wheatherlogo"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: ".3rem",
        }}
        className="margin-top"
      >
        {wheatherArr?.map((eachItem) => (
          <SingleData data={eachItem} />
        ))}
        <div>
          <span className="singledata__title">min temp</span>
          <br />
          <span>{`${data?.main.temp_min}`}</span>
          <sup>o</sup>
          <span>C</span>
        </div>
        <div>
          <span className="singledata__title">max temp</span>
          <br />
          <span>{`${data?.main.temp_max}`}</span>
          <sup>o</sup>
          <span>C</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
