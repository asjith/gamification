import React, { useState } from "react";
import { NAVIGATION_MENU } from "../utils/constants";

const NavMenu = ({ active, hover, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div>
      {NAVIGATION_MENU.map((nav) => {
        return (
          <div
            key={nav.id}
            className={`flex gap-2 p-2 cursor-pointer 
              ${hover === nav.name && active !== nav.name ? " rounded-10 bg-magenta-2 " : ""}
              ${active === nav.name ? "rounded-10 bg-magenta-1" : ""}`}
            onMouseEnter={(e) => handleMouseEnter(e, nav.name)}
            onMouseLeave={handleMouseLeave}
          >
            <img className="w-5 h-5" src={nav.icon}></img>
            <span
              className={`font-medium text-sm ${active === nav.name ? "text-magenta-12" : "text-text-secondary"}`}
            >
              {nav.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default NavMenu;
