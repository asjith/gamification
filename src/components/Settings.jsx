import React from "react";
import profile from "../icons/Profile.png";

const Settings = ({ hover, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div
      className={`absolute bottom-4 left-4 flex gap-2 p-2 cursor-pointer w-39 ${hover === "Settings" ? " rounded-10 bg-magenta-2 " : ""}`}
      onMouseEnter={(e) => handleMouseEnter(e, "Settings")}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-5 h-5" src={profile}></img>
      <span className="font-medium text-sm text-text-secondary">Settings</span>
    </div>
  );
};

export default Settings;
