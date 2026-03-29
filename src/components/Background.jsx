import React from "react";
import background from "../icons/background.png";

const Background = () => {
  return (
    <div className="absolute left-36.5 right-36.5 top-25.5">
      <img
        src={background}
        className="w-full max-h-80.5 opacity-60 rounded-2xl"
      />
    </div>
  );
};

export default Background;
