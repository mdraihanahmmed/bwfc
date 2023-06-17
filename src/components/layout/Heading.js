import React from "react";

const Heading = ({ text, className }) => {
  return (
    <div className={className}>
      <h2 className="mt-6 font-man text-5xl font-bold leading-[56px]">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
