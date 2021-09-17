import { createTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import blueGrey from "@material-ui/core/colors/blueGrey";

// Core theme instance.
const coreTheme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: blueGrey[200],
    },
  },
});

// Light theme instance
export const lightTheme = createTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    type: "light",
  },
});

// Dark theme instance
export const darkTheme = createTheme({
  ...coreTheme,
  palette: {
    ...coreTheme.palette,
    type: "dark",
    background: {
      default: "#121212",
    },
  },
});
