import React from "react";

const Button = ({ text }) => {
  return (
    <a
      href="#"
      className=" rounded-md bg-primary py-4 px-9 text-sm font-semibold text-white shadow-xl shadow-indigo-200"
    >
      {text}
    </a>
  );
};

export default Button;
