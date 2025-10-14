import React from "react";
import { useSelector } from "react-redux";

const Username = () => {
  const username = useSelector((state) => state.user.name);
  if (!username) return null;
  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
};

export default Username;
