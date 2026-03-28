import React from "react";
import SideBarNav from "./SideBarNav";
import Settings from "./Settings";

const SideBar = () => {
  return (
    <div className="fixed top-0 bottom-0 w-47 p-4 bg-magenta-3">
      <SideBarNav />
      <Settings />
    </div>
  );
};

export default SideBar;
