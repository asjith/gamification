import React from "react";

const EnableGamificationCard = () => {
  return (
    <div className="w-88.5 text-center">
      <div>
        <h1 className="font-semibold text-h1 text-magenta-15 h-fit leading-[1.4]">
          Gamify your Campaign
        </h1>
        <p className="font-inter text-base h-fit leading-[1.4] text-text-secondary mt-2">
          Enable gamification to start crafting your custom reward system.
        </p>
      </div>
      <button className="w-77.5 h-10 bg-magenta-12 px-4 py-2 rounded-10 text-center font-inter text-base leading-[1.4] text-text-brand-on-bg-fill mt-6">
        Enable Gamification
      </button>
    </div>
  );
};

export default EnableGamificationCard;
