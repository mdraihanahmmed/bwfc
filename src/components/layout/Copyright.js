import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Copyright = () => {
  return (
    <div className="bg-[#1B1C31]">
      <Container>
        <Flex className="flex justify-between">
          <div>
            <p className="py-5 font-man text-sm font-semibold text-white">
              2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of
              Services
            </p>
          </div>
          <div>
            <p className="py-5 font-man text-sm font-semibold text-white">
              Supported by Microsoft Startup
            </p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Copyright;
