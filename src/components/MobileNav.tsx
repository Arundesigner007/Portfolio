import React from "react";
import IconNav from "./IconNav";
const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 ">
      <IconNav />
    </div>
  );
};

export default MobileNav;
