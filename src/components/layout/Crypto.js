import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Crypto = () => {
  return (
    <div className="bg-primary">
      <Container>
        <Flex className="flex pt-[91px] pb-14">
          <div className="w-6/12">
            <h6 className="font-man text-sm font-bold text-white">
              Why Choose Us
            </h6>
            <h2 className="w-[528px] pt-4 pb-7 font-man text-5xl font-extrabold leading-[60px] text-white">
              Track your crytpo portfolio on the best way possible
            </h2>
            <p className="w-[446px] font-man text-lg font-normal text-white">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize.
            </p>
          </div>
          <div className=" w-6/12 ">
            <div className=" ml-36">
              <input
                type="text"
                placeholder="Email Address"
                className="mt-5 w-[356px] rounded-md bg-transparent py-4  pl-5 shadow-lg shadow-indigo-500"
              />

              <input
                type="password"
                placeholder="Password"
                className="mt-5 w-[356px] rounded-md bg-transparent py-4  pl-5 shadow-lg shadow-indigo-500"
              />
              <div className="mt-6 w-[356px] rounded-md bg-[#FF7F5C] text-center shadow-lg shadow-orange-300">
                <a
                  href="#"
                  className=" inline-block py-4 font-man  text-base font-bold uppercase text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Crypto;
