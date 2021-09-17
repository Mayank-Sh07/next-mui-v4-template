import React from "react";
import useDarkMode from "use-dark-mode";
import Switch from "@material-ui/core/Switch";

export default function Switches() {
  const { value: isDark, toggle: toggleDarkMode } = useDarkMode();

  return (
    <div>
      <Switch
        checked={isDark}
        onClick={toggleDarkMode}
        name="theme-switch"
        inputProps={{ "aria-label": "theme-switch-checkbox" }}
      />
    </div>
  );
}
