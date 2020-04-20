import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { useStateValue } from "../state";

const TimerLabel = () => {
  const [{ isBreakTime }] = useStateValue();

  return (
    <Typography variant="h4" component="span" align="center">
      <Box id="timer-label" color="text.secondary">
        {isBreakTime ? "Break" : "Session"}
      </Box>
    </Typography>
  );
};

export default TimerLabel;
