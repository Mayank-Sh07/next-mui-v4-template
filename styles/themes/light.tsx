import { createTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#19857b",
    },
    secondary: {
      main: red[600],
    },
  },
});

export default theme;
