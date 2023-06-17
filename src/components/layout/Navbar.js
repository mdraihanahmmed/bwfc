import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import Listitem from "./Listitem";
import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav>
      <Container>
        <Flex className="flex items-center justify-between">
          <div className="w-[15%] ">
            <Image imgsrc="assets/logo.png" />
          </div>
          <div className="w-[55%]">
            <List className="flex justify-center gap-x-7 ">
              <Listitem
                className="font-man text-sm font-normal text-primary "
                item="Product"
              />
              <FaAngleDown className="ml-[-12px]" />
              <Listitem
                className="font-man  text-sm font-normal hover:text-primary"
                item="Template"
              />
              <FaAngleDown className="ml-[-12px]" />
              <Listitem
                className="font-man  text-sm font-normal hover:text-primary "
                item="Blog"
              />
              <Listitem
                className="font-man text-sm  font-normal hover:text-primary"
                item="Pricing"
              />
            </List>
          </div>
          <div className="flex w-[30%] items-center justify-end">
            <a href="#" className="mr-12 font-man text-sm font-normal">
              Sign In
            </a>
            <Button href="#" text="Start Free" />
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
