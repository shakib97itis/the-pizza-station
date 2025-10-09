import React from "react";
import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
const Header = () => {
  return (
    <div className="bg-yellow-500 uppercase">
      <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </div>
  );
};

export default Header;
