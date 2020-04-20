import React from "react";
import ReactDOM from "react-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import "./styles/main.scss";
import CustomCssBaseline from "./components/GlobalStyles";
import { reducer, StateProvider } from "./state";
import App from "./components/App";

let theme = createMuiTheme({
  palette: {
    background: {},
  },
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
theme = responsiveFontSizes(theme);

// Freecodecamp Test Script
localStorage.setItem("project_selector", "pomodoro-clock");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CustomCssBaseline />
    <StateProvider reducer={reducer}>
      <App />
    </StateProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
