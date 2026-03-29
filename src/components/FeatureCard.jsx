import React from "react";
import reward from "../icons/Reward.png";

const FeatureCard = ({ feature }) => {
  return (
    <div className="w-73 h-50 border border-magenta-4 rounded-8 bg-white text-center ring-1 ring-inset ring-magenta-4 shadow-md bg-pattern bg-cover bg-[center_45%]">
      <img className="mx-auto mt-6 w-17.5 h-17.5" src={feature.icon}></img>
      <div className="flex flex-col gap-2 text-center mt-4 mx-4 mb-5">
        <h3 className="font-medium text-base leading-[1.4] text-text">
          {feature.title}
        </h3>
        <p className="font-inter font-normal text-sm leading-[1.4] text-text-secondary">
          {feature.detail}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
