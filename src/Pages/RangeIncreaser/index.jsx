import React from "react";
import "./index.css";

export const RangeIncreaser = () => {
  return (
    <>
      <input type="range" value="10" />
      <div
        className="br-2 rangeincrease__container"
        style={{ backgroundImage: "conic-gradient(green 10,white)" }}
      ></div>
    </>
  );
};
