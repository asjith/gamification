import React from "react";
import FeatureCard from "./FeatureCard";
import { FEATURE_CONTENTS } from "../utils/constants";

const FeatureHighlights = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {FEATURE_CONTENTS.map((feature) => {
        return <FeatureCard key={feature.id} feature={feature} />;
      })}
    </div>
  );
};

export default FeatureHighlights;
