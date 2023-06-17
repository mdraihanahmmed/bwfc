import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Headingsmall from "./Headingsmall";
import Flex from "./Flex";
import Image from "./Image";

const Choose = () => {
  return (
    <Container>
      <div className="relative mt-5 mb-[100px] rounded-xl bg-[#F3F7FA] pt-14">
        <Image
          className="absolute top-[-34px] left-[74px]"
          imgsrc="assets/chosedot.png"
        />
        <div className=" mb-16 text-center">
          <Headingsmall text="Why Financy" />
          <Heading text="Why Choose Us" />
        </div>
        <Flex className="flex flex-wrap">
          <div className="mr-20 w-[45%]">
            <div className="ml-20 mb-10 h-[241px] w-[485px] rounded-2xl bg-white">
              <Flex className="flex">
                <div className="mt-14 ml-7 h-14 w-14 rounded-full bg-[#F7ECFD]"></div>
                <div className="pl-8 pt-14 ">
                  <h4 className="font-man text-2xl font-extrabold">
                    No Extra Fee
                  </h4>
                  <p className="w-80 pt-5 font-man text-lg font-normal text-[#757095]">
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </p>
                </div>
              </Flex>
            </div>
          </div>
          <div className=" w-[45%]">
            <div className=" mb-10 h-[241px] w-[485px] rounded-2xl bg-white">
              <Flex className="flex">
                <div className="mt-14 ml-7 h-14 w-14 rounded-full bg-[#D8F5F1]"></div>
                <div className="pl-8 pt-14 ">
                  <h4 className="font-man text-2xl font-extrabold">
                    No Extra Fee
                  </h4>
                  <p className="w-80 pt-5 font-man text-lg font-normal text-[#757095]">
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </p>
                </div>
              </Flex>
            </div>
          </div>
          <div className="mr-20 w-[45%]">
            <div className="ml-20 mb-10 h-[241px] w-[485px] rounded-2xl bg-white">
              <Flex className="flex">
                <div className="mt-14 ml-7 h-14 w-14 rounded-full bg-[#D9F1FD]"></div>
                <div className="pl-8 pt-14 ">
                  <h4 className="font-man text-2xl font-extrabold">
                    No Extra Fee
                  </h4>
                  <p className="w-80 pt-5 font-man text-lg font-normal text-[#757095]">
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </p>
                </div>
              </Flex>
            </div>
          </div>
          <div className=" w-[45%]">
            <div className=" mb-14 h-[241px] w-[485px] rounded-2xl bg-white">
              <Flex className="flex">
                <div className="mt-14 ml-7 h-14 w-14 rounded-full bg-[#FFE4E3]"></div>
                <div className="pl-8 pt-14 ">
                  <h4 className="font-man text-2xl font-extrabold">
                    No Extra Fee
                  </h4>
                  <p className="w-80 pt-5 font-man text-lg font-normal text-[#757095]">
                    End-to-end payments and financial management in a single
                    solution. Meet the right platform.
                  </p>
                </div>
              </Flex>
            </div>
          </div>
        </Flex>
      </div>
    </Container>
  );
};

export default Choose;
