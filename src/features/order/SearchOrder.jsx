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
        className="bg-white"
      />
    </form>
  );
};

export default SearchOrder;
