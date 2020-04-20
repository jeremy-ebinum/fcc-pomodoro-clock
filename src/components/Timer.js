import React, { useCallback } from "react";
import ReactInterval from "react-interval";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import {
  useStateValue,
  setIsBreakTime,
  setIsRunning,
  countdownBreakTime,
  countdownSessionTime,
  resetBreakTime,
  resetSessionTime,
  resetState,
} from "../state";

const useStyles = makeStyles((theme) => ({
  timer: {
    borderRadius: "47%",
    padding: theme.spacing(2),
  },
  timerContent: { padding: theme.spacing(5) },
  timerControls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const getTimerString = (secondsLeft) => {
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

const Timer = () => {
  const [
    { isBreakTime, isRunning, breakTimeLeft, sessionTimeLeft },
    dispatch,
  ] = useStateValue();

  const classes = useStyles();

  const toggleStart = useCallback(() => {
    if (isRunning) {
      dispatch(setIsRunning(false));
    } else {
      dispatch(setIsRunning(true));
    }
  }, [isRunning, dispatch]);

  const countdown = useCallback(() => {
    if (isBreakTime) dispatch(countdownBreakTime());
    else dispatch(countdownSessionTime());
  }, [isBreakTime, dispatch]);

  const handleTimer = useCallback(() => {
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

  const reset = useCallback(() => {
    dispatch(resetState());
  }, [dispatch]);

  return (
    <>
      <ReactInterval
        timeout={1000}
        enabled={isRunning}
        callback={handleTimer}
      />
      <Card className={classes.timer} variant="outlined">
        <CardContent className={classes.timerContent}>
          <Typography variant="h4" component="span" align="center">
            <Box id="timer-label" color="text.secondary">
              {isBreakTime ? "Break" : "Session"}
            </Box>
          </Typography>

          <Divider variant="middle" />

          <Typography variant="h2" component="span" align="center">
            <Box id="time-left" fontWeight="bold">
              {isBreakTime
                ? getTimerString(breakTimeLeft)
                : getTimerString(sessionTimeLeft)}
            </Box>
          </Typography>

          <CardActions className={classes.timerControls}>
            <IconButton
              id="start_stop"
              onClick={toggleStart}
              aria-label="start/stop"
            >
              {isRunning ? (
                <PauseCircleFilledIcon color="action" fontSize="large" />
              ) : (
                <PlayCircleFilledIcon color="action" fontSize="large" />
              )}
            </IconButton>
            <IconButton id="reset" onClick={reset} aria-label="reset">
              <RotateLeftIcon color="error" fontSize="large" />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default Timer;
