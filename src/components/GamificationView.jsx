import React from "react";
import Background from "./Background";
import EnableGamificationCard from "./EnableGamificationCard";
import FeatureHighlights from "./FeatureHighlights";

const GamificationView = () => {
  return (
    <div className="flex flex-col gap-10.5 h-screen justify-center items-center">
      <Background />
      <EnableGamificationCard />
      <FeatureHighlights />
    </div>
  );
};

export default GamificationView;
