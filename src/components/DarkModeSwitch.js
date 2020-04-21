import React, { useCallback } from "react";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";

import { useStateValue, setDarkMode } from "../state";

const DarkModeSwitch = () => {
  const [{ darkMode }, dispatch] = useStateValue();

  const toggleDarkMode = useCallback(() => {
    dispatch(setDarkMode(!darkMode));
    localStorage.setItem(
      "fcc-pomodoro-clock-dark-mode",
      JSON.stringify(!darkMode)
    );
  }, [darkMode, dispatch]);

  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
      label={
        <Box fontWeight={700}>
          <Typography variant="inherit">Dark Mode</Typography>
        </Box>
      }
    />
  );
};

export default DarkModeSwitch;
