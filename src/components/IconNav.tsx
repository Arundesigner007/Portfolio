import React from "react";

import { IoHomeSharp } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import { FaFileInvoice } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const IconNav = () => {
  return (
    <ul className="flex gap-3 bg-secondary text-primary px-2 py-1  justify-evenly lg:text-2xl lg:py-3 *:relative *:z-30">
      <ListItem>
        <a href="#Home">
          <IoHomeSharp />
        </a>
      </ListItem>
      <ListItem>
        <a href="#About">
          <IoMdContact />
        </a>
      </ListItem>
      <ListItem>
        <a href="#Resume">
          <FaFileInvoice />
        </a>
      </ListItem>
      <ListItem>
        <a href="#Projects">
          <FaToolbox />
        </a>
      </ListItem>
      <ListItem>
        <a href="#Contact">
          <FaPhoneAlt />
        </a>
      </ListItem>
    </ul>
  );
};
const ListItem = ({ children }) => {
  return (
    <li className="p-2 hover:bg-white hover:text-secondary rounded-full">
      {children}
    </li>
  );
};

export default IconNav;
