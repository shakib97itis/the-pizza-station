import React from "react";
import { Link } from "react-router";

const Button = ({ children, disabled, type = "submit", to }) => {
  const className =
    "cursor-pointer rounded-full bg-yellow-400 px-4 py-3 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-0 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  if (to)
    return (
      <Link className={className} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
