import React from "react";
import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";

const Header = () => {
  return (
    <div>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
    </div>
  );
};

export default Header;
