import React from "react";
import { Link } from "react-router";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
const Header = () => {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
};

export default Header;
