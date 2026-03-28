import React from "react";
import profile from "../icons/Profile.png";

const Settings = () => {
  return (
    <div className="absolute bottom-4 left-4 flex gap-2 p-2 cursor-pointer">
      <img className="w-5 h-5" src={profile}></img>
      <span className="font-medium text-sm text-text-secondary">Settings</span>
    </div>
  );
};

export default Settings;
