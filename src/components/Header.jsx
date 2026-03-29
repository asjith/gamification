import React from "react";
import notification from "../icons/Notification.png";
import user from "../icons/Persona.png";
import alert from "../icons/NotificationAlert.png";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 left-47 flex justify-between items-center h-16 bg-white px-20 py-4 md:px-36.5">
      <h2 className="font-semibold text-lg text-text h-fit">Gamification</h2>
      <div className="relative flex gap-4">
        <div className="flex justify-center items-center w-8 h-8 cursor-pointer hover:bg-bg-surface-hover hover:rounded-10">
          <img className="w-6 h-6" src={notification}></img>
        </div>

        <img className="absolute left-4 top-0 w-4 h-4" src={alert}></img>
        <img className="w-8 h-8" src={user}></img>
      </div>
    </div>
  );
};

export default Header;
