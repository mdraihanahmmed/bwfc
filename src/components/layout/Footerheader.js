import React from "react";
import Container from "./Container";

const Footerheader = ({ text }) => {
  return (
    <Container>
      <div className="mt-[100px] w-[20%]">
        <h4 className="font-man text-[21px] font-bold text-white">{text}</h4>
      </div>
    </Container>
  );
};

export default Footerheader;
