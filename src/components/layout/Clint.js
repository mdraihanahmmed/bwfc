import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Headingsmall from "./Headingsmall";
import Image from "./Image";
import Flex from "./Flex";
import { BsArrowLeft, BsArrowRight, BsFillStarFill } from "react-icons/bs";
const Clint = () => {
  return (
    <Container>
      <div className="mt-[200px]">
        <Headingsmall text="Testimonials" />
        <Heading
          className="w-[406px]"
          text="Check what our 
                clients are saying"
        />

        <Flex className="flex">
          <div className="relative mt-10 w-6/12">
            <Image imgsrc="assets/clint.png" />
            <Image
              className="absolute top-[42px] left-[-46px]"
              imgsrc="assets/clintleft.png"
            />
            <Image
              className="absolute top-[34%] right-[-5%]"
              imgsrc="assets/clintright.png"
            />
            <Flex className="mt-9 flex items-center">
              <div className="relative flex h-3 w-3 rounded-full bg-primary p-4">
                <BsArrowLeft className="  absolute top-[30%] left-[25%] text-white" />
              </div>
              <div>
                <BsArrowRight className="ml-3" />
              </div>
            </Flex>
          </div>
          <div className="mt-10 w-6/12 pl-20">
            <div>
              <Image imgsrc="assets/coma.png" />
            </div>
            <h5 className="mt-4 mb-2.5 w-[290px] font-man text-xl font-extrabold">
              Save Time Managing Social Media For Your Business
            </h5>
            <p className="w-[465px] font-man text-base font-normal text-[#757095]">
              Is be upon sang fond must shew. Really boy law county she unable
              her sister. Feet you off its like like six. Among sex are leave
              law built now. In built table in an rapid blush. Merits behind on
              afraid or warmly.
            </p>
            <p className="mt-3 w-[455px] font-man text-base font-normal text-[#757095]">
              Believing neglected so so allowance existence departure in. In
              design active temper be uneasy.
            </p>
            <Flex className="mt-3 flex gap-x-1">
              <BsFillStarFill className="text-[#F9896B]" />
              <BsFillStarFill className="text-[#F9896B]" />
              <BsFillStarFill className="text-[#F9896B]" />
              <BsFillStarFill className="text-[#F9896B]" />
              <BsFillStarFill className="text-[#F9896B]" />
            </Flex>
            <h5 className="mt-2 font-man text-base font-extrabold">
              Angela Taylor
            </h5>
            <p className="font-man text-sm font-normal text-[#757095]">
              CEO SAMSUNG
            </p>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Clint;
