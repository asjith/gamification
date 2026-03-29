import React from "react";
import Background from "./Background";
import EnableGamificationCard from "./EnableGamificationCard";

const GamificationView = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Background />
      <EnableGamificationCard />
    </div>
  );
};

export default GamificationView;
