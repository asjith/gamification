import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const SideBarNav = (props) => {
  return (
    <div className="flex flex-col gap-6">
      <Logo />
      <NavMenu {...props} />
    </div>
  );
};

export default SideBarNav;
