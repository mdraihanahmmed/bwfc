import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
const Brand = () => {
  return (
    <Container>
      <div className="mt-32 text-center">
        <h3 className="font-man text-2xl font-normal">
          Over 32k+ software businesses growing with AR Shakir
        </h3>
        <Flex className=" mt-10 flex justify-center gap-x-12">
          <Image imgsrc="assets/brand1.png" />
          <Image imgsrc="assets/brand2.png" />
          <Image imgsrc="assets/brand3.png" />
          <Image imgsrc="assets/brand4.png" />
          <Image imgsrc="assets/brand5.png" />
          <Image imgsrc="assets/brand6.png" />
        </Flex>
      </div>
    </Container>
  );
};

export default Brand;
