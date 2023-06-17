import React from "react";
import Button from "./Button";
import Container from "./Container";
import Flex from "./Flex";
import Heading from "./Heading";
import Headingsmall from "./Headingsmall";
import Image from "./Image";
import Pera from "./Pera";
const Verfiy = () => {
  return (
    <div className="mt-[172px]">
      <Image
        imgsrc="assets/verifybg.png"
        className="absolute h-[500px] w-full"
      />
      <Container>
        <Flex className="flex">
          <div className="w-6/12">
            <Headingsmall text="Our Feature" />
            <Heading
              className="w-[503px]"
              text="All payments are
                    linked to your Financy
                    account"
            />
            <Pera
              className="w-[513px]"
              text="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
            />
            <Button text="Get Started" />
          </div>
          <div className=" w-6/12">
            <Flex className="flex">
              <div className="relative ">
                <Image
                  imgsrc="assets/verifydot.png"
                  className="absolute right-[-176px] top-[57px] "
                />
                <Image
                  imgsrc="assets/verifycrd1.png"
                  className=" rounded-xl shadow-lg"
                />
                <Image
                  imgsrc="assets/verifyicon.png"
                  className="absolute top-0 right-[-42px]"
                />
              </div>
              <div className="relative">
                <div className="absolute bottom-[-110px] left-[-150px] z-10 h-[320px] w-[370px] rounded-2xl bg-white shadow-xl">
                  <div className="mx-auto my-6 h-[100px] w-[100px]  rounded-full">
                    <Image
                      imgsrc="assets/mentor.png"
                      className="h-full w-full rounded-full "
                    />
                  </div>
                  <div className="flex justify-center">
                    <h5 className="w-[200px]  font-man text-xl font-semibold text-[#111235] ">
                      Md.Raihan Ahmmed
                    </h5>
                  </div>
                  <p className="mt-2 text-center font-man text-sm font-normal text-[#6C6C6C]">
                    Mentor of Web Development
                  </p>
                  <div className="mt-9 text-center">
                    <a className="rounded-lg bg-[#0091D0] py-3 px-11  font-man text-base font-semibold text-white">
                      CONTACT
                    </a>
                  </div>
                </div>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Verfiy;
