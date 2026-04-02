export const assignStyle = (role, enable) => {
  switch (role) {
    case "action": {
      return [enable ? "bg-magenta-12" : "bg-magenta-10", "text-white"];
    }
    case "cancel": {
      return ["border border-border", "text-text"];
    }
  }
};
