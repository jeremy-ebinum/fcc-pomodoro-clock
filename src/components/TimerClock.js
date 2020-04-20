import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { useStateValue } from "../state";

const getFormatedTime = (secondsLeft) => {
  const hours = Math.floor((secondsLeft / 3600) % 24);
  let minutes = Math.floor((secondsLeft / 60) % 60);
  let seconds = Math.floor(secondsLeft % 60);

  if (minutes < 10) minutes = `0${minutes}`;
  if (seconds < 10) seconds = `0${seconds}`;

  if (hours > 0) {
    return `60:${seconds}`;
  }

  return `${minutes}:${seconds}`;
};

const TimerClock = () => {
  const [{ isBreakTime, breakTimeLeft, sessionTimeLeft }] = useStateValue();

  return (
    <Typography variant="h2" component="span" align="center">
      <Box id="time-left" fontWeight="bold">
        {isBreakTime
          ? getFormatedTime(breakTimeLeft)
          : getFormatedTime(sessionTimeLeft)}
      </Box>
    </Typography>
  );
};

export default TimerClock;
