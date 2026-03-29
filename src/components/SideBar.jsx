import React, { useState } from "react";
import SideBarNav from "./SideBarNav";
import Settings from "./Settings";

const SideBar = () => {
  const [active, setactive] = useState("Gamification");
  const [hover, setHover] = useState(null);

  const handleMouseEnter = (e, navName) => {
    setHover(navName);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className="fixed top-0 bottom-0 w-47 p-4 bg-magenta-3">
      <SideBarNav
        active={active}
        hover={hover}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
      <Settings
        hover={hover}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default SideBar;
