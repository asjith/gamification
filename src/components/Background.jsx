import React from "react";
import background from "../icons/background.png";

const Background = () => {
  return (
    <div className="absolute -z-10 top-25.5 left-20 right-20 md:left-36.5 md:right-36.5 ">
      <img
        src={background}
        className="w-full min-h-80.5 opacity-60 rounded-2xl"
      />
    </div>
  );
};

export default Background;
