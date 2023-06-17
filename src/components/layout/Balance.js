import React from "react";
import Container from "./Container";
import Image from "./Image";
import Flex from "./Flex";
import Button from "./Button";
import Headingsmall from "./Headingsmall";
import Heading from "./Heading";
import Pera from "./Pera";

const Balance = () => {
  return (
    <div className="mt-32">
      <div className="relative">
        <Image
          className="absolute z-[-1111] h-[600px] w-full"
          imgsrc="assets/balancebg.png"
        />
      </div>
      <Container>
        <Flex className=" flex justify-between">
          <div className="relative w-6/12">
            <Image imgsrc="assets/balance.png" />
            <Image
              imgsrc="assets/bleft.png"
              className="absolute top-[260px] left-[-135px]"
            />
            <Image
              imgsrc="assets/btopright.png"
              className="absolute top-[33px] right-[-75px]"
            />
            <Image
              imgsrc="assets/bbttomright.png"
              className="absolute bottom-[-147px] right-[-112px]"
            />
          </div>
          <div className="ml-28 w-6/12">
            <div className="mt-10">
              <Headingsmall text="OurFeature" />
              <Heading text="Receive payments quickly from anywhere" />
              <Pera
                text="Why kept very ever home mrs. Considered sympathize ten uncommonly
                      occasional assistance sufficient not. Letter of on become he tended
                      active enable to."
              />
              <Button text="Get Started" />
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Balance;
