import React from "react";

const Pera = ({ text, className }) => {
  return (
    <div className={className}>
      <p className="mt-9 mb-9 font-man text-lg font-normal text-[#757095]">
        {text}
      </p>
    </div>
  );
};

export default Pera;
