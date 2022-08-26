import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const Header = () => {
  return (
    <>
      <div className="header__container padding-16">
        <Link to="/" className="header__link">
          <h3>MyStore</h3>
        </Link>

        <Link to="/cartitems" className="header__link">
          <AddShoppingCartIcon fontSize="medium" color="info" />
        </Link>
      </div>
      <div className=" heading__search-bar ">
        <input type="text" placeholder="Search By Based Title" />
        <div className="header__serach-name">
          <span>Search</span>
        </div>
      </div>
    </>
  );
};
