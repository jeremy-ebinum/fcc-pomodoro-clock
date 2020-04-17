import React from "react";
import ReactDOM from "react-dom";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./styles/main.scss";
import App from "./components/App/App";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

// Freecodecamp Test Script
localStorage.setItem("project_selector", "pomodoro-clock");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
