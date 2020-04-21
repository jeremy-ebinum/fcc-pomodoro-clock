import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useStateValue } from "../state";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    background: `linear-gradient(to right, ${theme.palette.grey[100]}, ${theme.palette.info.light} 70%, ${theme.palette.info.dark})`,
    opacity: 0.5,
    zIndex: -1,
    animation: `$shimmer .75s ${theme.transitions.easing.easeInOut} infinite`,
  },
  "@keyframes shimmer": {
    "0%": {
      opacity: 0.35,
    },
    "100%": {
      opacity: 0.75,
    },
  },
}));

const TimerProgress = () => {
  const [
    { isBreakTime, breakLength, sessionLength, breakTimeLeft, sessionTimeLeft },
  ] = useStateValue();
  const classes = useStyles();

  const getProgressHeight = () => {
    let totalTime = sessionLength * 60;
    let timeLeft = sessionTimeLeft;

    if (isBreakTime) {
      totalTime = breakLength * 60;
      timeLeft = breakTimeLeft;
    }

    const height = 100 - (timeLeft / totalTime) * 100;

    return `${height}%`;
  };

  getProgressHeight();

  return (
    <div style={{ height: getProgressHeight() }} className={classes.root} />
  );
};

export default TimerProgress;
