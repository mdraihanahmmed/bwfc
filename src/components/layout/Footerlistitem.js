import React from "react";
import Container from "./Container";
import List from "./List";
import Listitem from "./Listitem";
const Footerlistitem = ({ item, className }) => {
  return (
    <Container>
      <div className={className}>
        <List className="mt-4">
          <Listitem
            className="white  font-man text-base font-medium text-white"
            item={item}
          />
        </List>
      </div>
    </Container>
  );
};

export default Footerlistitem;
