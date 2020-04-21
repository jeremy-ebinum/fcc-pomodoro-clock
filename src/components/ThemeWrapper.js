import React, { useMemo, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import { useStateValue, setDarkMode } from "../state";
import CustomCssBaseline from "./GlobalStyles";

let defaultTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "Raleway",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "Helvetica",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
defaultTheme = responsiveFontSizes(defaultTheme);

const ThemeWrapper = ({ children }) => {
  const [{ darkMode }, dispatch] = useStateValue();

  useLayoutEffect(() => {
    const storedDarkMode = localStorage.getItem("fcc-pomodoro-clock-dark-mode");
    if (storedDarkMode) {
      try {
        dispatch(setDarkMode(JSON.parse(storedDarkMode)));
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useMemo(
    () =>
      createMuiTheme({
        ...defaultTheme,
        palette: {
          type: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CustomCssBaseline />
      {children}
    </ThemeProvider>
  );
};

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

ThemeWrapper.defaultProps = {
  children: null,
};

export default ThemeWrapper;
