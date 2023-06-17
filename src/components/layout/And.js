import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const And = () => {
  return (
    <Container>
      <Flex className="mt-16 flex items-center rounded-xl border-2 border-solid py-9 pl-7 shadow-lg">
        <div className="w-[80%]">
          <p className="w-[825px] font-man text-[22px] font-normal text-[#757095]">
            And residence for met the estimable disposing. Mean if he they been
            no hold mr. Is at much do made took held help.
          </p>
        </div>
        <div className="w-[20%]">
          <div className="mr-8 rounded-full bg-[#FF7F5C] text-center  shadow-2xl shadow-orange-200">
            <a
              href="#"
              className=" px-18 inline-block py-5 font-man  text-base font-bold uppercase text-white"
            >
              Get Started
            </a>
          </div>
        </div>
      </Flex>
    </Container>
  );
};

export default And;
