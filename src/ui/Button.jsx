import React from "react";
import { Link } from "react-router";

const Button = ({ children, disabled, type = "primary", to, onClick }) => {
  const baseStyles =
    "inline-block text-sm cursor-pointer rounded-full bg-yellow-400 font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-0 disabled:cursor-not-allowed";

  const styles = {
    primary: baseStyles + " px-4 py-3 md:px-6 md:py-4",
    small: baseStyles + " px-4 py-2 md:px-6 md:py-2.5 text-xs",
    secondary:
      "inline-block cursor-pointer rounded-full border-2 border-stone-300 px-4 py-2.5 font-semibold tracking-wide text-stone-500 uppercase transition-colors duration-300 ease-in-out hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:outline-0 disabled:cursor-not-allowed md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
