import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import { BsFillPlayCircleFill } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="">
      <div className="relative w-full">
        <Image
          className="absolute h-[600px] w-full"
          imgsrc="assets/bannerbg1.png"
        />
        <Image
          className="absolute top-[100px] left-0 h-[600px] w-full"
          imgsrc="assets/bannerbg2.png"
        />
        <Container>
          <Flex className="flex justify-between">
            <div className="w-6/12">
              <h1 className="w-[646px] pt-44 font-man text-6xl font-extrabold leading-[80px]">
                Managing business payments has never been easier
              </h1>
              <p className="w-[469px] pt-5 font-man text-xl font-normal leading-7 text-[#64607D]">
                End-to-end payments and financial management in a single
                solution. Meet the right platform to help realize.
              </p>
              <Flex className="flex">
                <a
                  href="#"
                  className="mt-7 inline-block rounded-full bg-primary py-4 px-9 font-man text-base font-bold text-white shadow-2xl"
                >
                  Get Started
                </a>
                <Flex className="flex items-center ">
                  <BsFillPlayCircleFill className="mt-7 ml-12 text-6xl text-[#22D497] " />
                  <a
                    href="#"
                    className="mt-7 ml-3 text-base font-semibold text-primary shadow-2xl"
                  >
                    See How It Works
                  </a>
                </Flex>
              </Flex>
            </div>
            <div className=" relative mt-20 flex w-6/12 justify-end">
              <Image
                className="h-full object-cover"
                imgsrc="assets/bannermain.png"
              />
              <Image
                imgsrc="assets/bannerleft.png"
                className="absolute top-[153px] left-[-81px]"
              />
              <Image
                imgsrc="assets/bannertop.png"
                className="absolute top-[53px] right-[-34px]"
              />
              <Image
                imgsrc="assets/bannerbottom.png"
                className="absolute bottom-[-172px] left-[-89px]"
              />
              <Image
                imgsrc="assets/bannerright.png"
                className="absolute bottom-[0] right-[-134px]"
              />
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
