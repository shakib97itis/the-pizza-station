import React from "react";
import { Link, useNavigate } from "react-router";

const LinkButton = ({ to, children }) => {
  const navigate = useNavigate();
  const className =
    "text-sm text-blue-500 underline-offset-4 hover:text-blue-700 hover:underline cursor-pointer";

  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
