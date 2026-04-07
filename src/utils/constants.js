import application from "../icons/APplications.png";
import brain from "../icons/Brain.png";
import briefcase from "../icons/Briefcase.png";
import home from "../icons/Home.png";
import wallet from "../icons/Wallet.png";
import reward from "../icons/Reward.png";
import milestones from "../icons/Milestones.png";
import incentives from "../icons/Incentives.png";

export const NAVIGATION_MENU = [
  {
    id: 1,
    name: "Home",
    icon: home
  },
  {
    id: 2,
    name: "Insights",
    icon: brain
  },
  {
    id: 3,
    name: "Gamification",
    icon: briefcase
  },
  {
    id: 4,
    name: "Applications",
    icon: application
  },
  {
    id: 5,
    name: "Payments",
    icon: wallet
  }
];

export const FEATURE_CONTENTS = [
  {
    id: 1,
    icon: reward,
    title: "Reward Your Ambassadors",
    detail: "Boost campaign performance by setting up rewards for ambassadors"
  },
  {
    id: 2,
    icon: milestones,
    title: "Set Milestones",
    detail: "Set up custom goals for sales, posts, or time-based achievements"
  },
  {
    id: 3,
    icon: incentives,
    title: "Customise Incentives",
    detail:
      "Create custom incentives like flat fees, free products, or special commissions."
  }
];

export const MODAL_FORM_FIELDS = [
  {
    id: 1,
    fieldName: "Reward event",
    placeholder: "Select an event",
    fieldSelected: false,
    fieldValue: "",
    options: [
      {
        id: 1.1,
        optionName: "Cross $X in sales",
        displayTemplate: "Cross ${x} in sales",
        optionSelected: false,
        inputs: [{ id: 1.11, key: "x", value: "" }]
      },
      {
        id: 1.2,
        optionName: "Posts X times every Y period",
        displayTemplate: "{x} times every {y} period",
        optionSelected: false,
        inputs: [
          { id: 1.21, key: "x", value: "" },
          { id: 1.22, key: "y", value: "" }
        ]
      },
      {
        id: 1.3,
        optionName: "Is Onboarded",
        displayTemplate: "Is Onboarded",
        optionSelected: false,
        inputs: []
      }
    ]
  },
  {
    id: 2,
    fieldName: "Reward with",
    placeholder: "Select a reward",
    fieldSelected: false,
    fieldValue: "",
    options: []
  }
];

export const SAVE_BTN_STATUS = {
  DISABLE: "disable",
  ENABLE: "enable"
};
