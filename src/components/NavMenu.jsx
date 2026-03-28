import React from "react";
import { NAVIGATION_MENU } from "../utils/constants";

const NavMenu = () => {
  return (
    <div>
      {NAVIGATION_MENU.map((nav) => {
        return (
          <div
            key={nav.id}
            className={`flex gap-2 p-2 cursor-pointer ${
              nav.name === "Gamification" ? "rounded-10 bg-magenta-1" : ""
            }`}
          >
            <img className="w-5 h-5" src={nav.icon}></img>
            <span
              className={`font-medium text-sm ${nav.name === "Gamification" ? "text-magenta-12" : "text-text-secondary"}`}
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
