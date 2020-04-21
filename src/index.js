import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import { reducer, StateProvider } from "./state";
import ThemeWrapper from "./components/ThemeWrapper";
import App from "./components/App";

// Freecodecamp Test Script
localStorage.setItem("project_selector", "pomodoro-clock");

ReactDOM.render(
  <StateProvider reducer={reducer}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </StateProvider>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
