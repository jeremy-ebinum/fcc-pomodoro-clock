import React, { useCallback, useRef } from "react";
import ReactInterval from "react-interval";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import timerBeepSoundUrl from "../assets/timerBeep.mp3";
import timerBeepCaption from "../assets/timerBeep.vtt";
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
import TimerProgress from "./TimerProgress";
import TimerControls from "./TimerControls";

const useStyles = makeStyles((theme) => ({
  timer: {
    position: "relative",
    borderRadius: "47%",
    padding: theme.spacing(2),
    background: "transparent",
    overflow: "hidden",
  },
  timerContent: { padding: theme.spacing(5) },
}));

const Timer = () => {
  const [
    { isBreakTime, isRunning, breakTimeLeft, sessionTimeLeft },
    dispatch,
  ] = useStateValue();
  const classes = useStyles();
  const beepRef = useRef();

  const countdown = useCallback(() => {
    if (isBreakTime) dispatch(countdownBreakTime());
    else dispatch(countdownSessionTime());
  }, [isBreakTime, dispatch]);

  const playBeep = useCallback(() => {
    if (beepRef.current) beepRef.current.play();
  }, []);

  const updateTimer = useCallback(() => {
    if (isBreakTime && breakTimeLeft === 0) {
      playBeep();
      dispatch(setIsBreakTime(false));
      dispatch(resetSessionTime());
    }

    if (!isBreakTime && sessionTimeLeft === 0) {
      playBeep();
      dispatch(setIsBreakTime(true));
      dispatch(resetBreakTime());
    }

    countdown();
  }, [
    isBreakTime,
    breakTimeLeft,
    sessionTimeLeft,
    countdown,
    playBeep,
    dispatch,
  ]);

  return (
    <>
      <audio ref={beepRef} id="beep" preload="auto">
        <track default kind="captions" src={timerBeepCaption} srcLang="en" />
        <source src={timerBeepSoundUrl} type="audio/mpeg" />
      </audio>

      <ReactInterval
        timeout={1000}
        enabled={isRunning}
        callback={updateTimer}
      />
      <Card className={classes.timer} variant="outlined">
        <TimerProgress />
        <CardContent className={classes.timerContent}>
          <TimerLabel />

          <Divider variant="middle" />

          <TimerClock />

          <TimerControls ref={beepRef} />
        </CardContent>
      </Card>
    </>
  );
};

export default Timer;
