import React from "react";
import Background from "./Background";
import EnableGamificationCard from "./EnableGamificationCard";
import FeatureHighlights from "./FeatureHighlights";

const GamificationView = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-10.5 min-h-screen pt-40.5 pb-68.25">
      <Background />
      <EnableGamificationCard />
      <FeatureHighlights />
    </div>
  );
};

export default GamificationView;
