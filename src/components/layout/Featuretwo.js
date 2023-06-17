import React from "react";
import Button from "./Button";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Headingsmall from "./Headingsmall";
import Pera from "./Pera";
import Image from "./Image";

const Featuretwo = () => {
  return (
    <Container>
      <div className="mt-28">
        <Flex className="flex">
          <div className="w-6/12">
            <Headingsmall text="Our Feature" />
            <Heading
              className="w-[534px]"
              text="All payments are
                linked to your Financy
                account"
            />
            <Pera
              className="w-[514px]"
              text="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
            />
            <Button text="Get Started" />
          </div>
          <div className="flex w-6/12">
            <div className="relative">
              <Image imgsrc="assets/f2.png" />
              <Image
                className="absolute bottom-[92px] right-[79px]"
                imgsrc="assets/fdot.png"
              />
            </div>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Featuretwo;
