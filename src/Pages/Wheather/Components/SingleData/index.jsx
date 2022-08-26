import React from "react";
import "./index.css";

export const SingleData = ({ data }) => {
  return (
    <>
      <div>
        <span className="singledata__title">{data.name}</span>
        <br />
        <span>{data.data}</span>
      </div>
    </>
  );
};
