import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Headingsmall from "./Headingsmall";
import Image from "./Image";
import Pera from "./Pera";

const Feature = () => {
  return (
    <Container>
      <Flex className="relative mt-[180px] flex rounded-xl bg-[#F3F7FA] pt-[75px] pl-16 pb-[70px]">
        <div className="w-[60%]">
          <Headingsmall text="Our Feature" />
          <Heading text="Receive payments quickly from anywhere" />
          <Pera
            text=" Why kept very ever home mrs. Considered sympathize ten uncommonly
            occasional assistance sufficient not. Letter of on become he tended
            active enable to."
          />
        </div>
        <div className=" w-[40%]">
          <h4 className="font-man text-2xl font-bold  text-primary">
            Get Started for Free
          </h4>
          <input
            type="text"
            placeholder="Email Address"
            className="mt-5 w-[356px] rounded-md py-4 pl-5 shadow-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-5 w-[356px] rounded-md py-4 pl-5 shadow-md"
          />
          <div className="mt-6 w-[356px] rounded-md bg-[#FF7F5C] text-center shadow-2xl ">
            <a
              href="#"
              className=" inline-block py-4 font-man  text-base font-bold uppercase text-white"
            >
              Get Started
            </a>
          </div>
          <Image
            imgsrc="assets/feature.png"
            className="absolute top-[-20px] right-0"
          />
        </div>
      </Flex>
    </Container>
  );
};

export default Feature;
