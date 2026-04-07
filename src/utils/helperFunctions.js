export const assignStyle = (role, enable) => {
  switch (role) {
    case "action": {
      return [
        enable
          ? "bg-magenta-12"
          : "disabled:bg-magenta-10 disabled:cursor-not-allowed ",
        "text-white"
      ];
    }
    case "cancel": {
      return ["border border-border", "text-text"];
    }
  }
};

export const findIndex = (state) => {
  const fieldIndex = state.fieldDetails.findIndex(
    (field) => field.id === state.activeFieldId
  );
  const optionIndex = state.fieldDetails[fieldIndex].options.findIndex(
    (option) => option.id === state.activeOptionId
  );

  return [fieldIndex, optionIndex];
};
