import React from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const SideBarNav = () => {
  return (
    <div className="flex flex-col gap-6">
      <Logo />
      <NavMenu />
    </div>
  );
};

export default SideBarNav;
