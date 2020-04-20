import React, { useCallback } from "react";
import ReactInterval from "react-interval";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import {
  useStateValue,
  setIsBreakTime,
  countdownBreakTime,
  countdownSessionTime,
  resetBreakTime,
  resetSessionTime,
} from "../state";
import TimerLabel from "./TimerLabel";
import TimerClock from "./TimerClock";
import TimerControls from "./TimerControls";

const useStyles = makeStyles((theme) => ({
  timer: {
    borderRadius: "47%",
    padding: theme.spacing(2),
  },
  timerContent: { padding: theme.spacing(5) },
}));

const Timer = () => {
  const [
    { isBreakTime, isRunning, breakTimeLeft, sessionTimeLeft },
    dispatch,
  ] = useStateValue();

  const classes = useStyles();

  const countdown = useCallback(() => {
    if (isBreakTime) dispatch(countdownBreakTime());
    else dispatch(countdownSessionTime());
  }, [isBreakTime, dispatch]);

  const updateTimer = useCallback(() => {
    if (isBreakTime && breakTimeLeft === 0) {
      dispatch(setIsBreakTime(false));
      dispatch(resetSessionTime());
    }

    if (!isBreakTime && sessionTimeLeft === 0) {
      dispatch(setIsBreakTime(true));
      dispatch(resetBreakTime());
    }

    countdown();
  }, [isBreakTime, breakTimeLeft, sessionTimeLeft, countdown, dispatch]);

  return (
    <>
      <ReactInterval
        timeout={1000}
        enabled={isRunning}
        callback={updateTimer}
      />
      <Card className={classes.timer} variant="outlined">
        <CardContent className={classes.timerContent}>
          <TimerLabel />

          <Divider variant="middle" />

          <TimerClock />

          <TimerControls />
        </CardContent>
      </Card>
    </>
  );
};

export default Timer;
