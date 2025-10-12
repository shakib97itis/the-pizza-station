import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleOrder(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleOrder}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Order number"
        className="w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:outline-0 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
};

export default SearchOrder;
