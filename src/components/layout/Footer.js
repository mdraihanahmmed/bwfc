import React from "react";
import Container from "./Container";
import Copyright from "./Copyright";
import Flex from "./Flex";
import Footerheader from "./Footerheader";
import Footerlistitem from "./Footerlistitem";

const Footer = () => {
  return (
    <>
      <div className="border-b border-solid border-[#767783]  bg-[#1B1C31] pb-[126px]">
        <Container>
          <Flex className="flex  ">
            <div className="mr-[200px] w-[35%] pt-[123px] pb-4">
              <h4 className="font-man text-xl font-bold text-white">BWFC</h4>
              <p className="w-[520px] pt-4 font-man text-base font-medium leading-[26px] text-[#767783]">
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment.
              </p>
            </div>
            <div className="mr-20 w-[15%]">
              <Footerheader text="Company" />
              <Footerlistitem item="About Us" />
              <Footerlistitem item="Careers" />
              <Footerlistitem item="Blog" />
              <Footerlistitem item="Pricing" />
            </div>
            <div className="mr-10 w-[25%]">
              <Footerheader text="Product" />
              <Footerlistitem item="Invoicing Platform" />
              <Footerlistitem item="Accounting Plateform" />
              <Footerlistitem item="Create Proposal" />
              <Footerlistitem item="Contracts" />
            </div>
            <div className="w-[25%]">
              <Footerheader text="Resources" />
              <Footerlistitem item="Proposal Template" />
              <Footerlistitem item="Invoice Template" />
              <Footerlistitem item="Tuturoial" />
              <Footerlistitem
                item="How to write a contract"
                className="w-[180px]"
              />
            </div>
          </Flex>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
