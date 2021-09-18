import { createTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import blueGrey from "@material-ui/core/colors/blueGrey";

// Core theme instance.
const coreTheme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

// Light theme instance
export const lightTheme = createTheme({
  ...coreTheme,
  palette: {
    type: "light",
    primary: {
      main: teal[500],
    },
    secondary: {
      main: blueGrey[200],
    },
  },
});

// Dark theme instance
export const darkTheme = createTheme({
  ...coreTheme,
  palette: {
    type: "dark",
    primary: {
      main: teal[500],
    },
    secondary: {
      main: blueGrey[200],
    },
  },
});
