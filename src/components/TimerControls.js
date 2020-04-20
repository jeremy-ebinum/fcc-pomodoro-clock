import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardActions from "@material-ui/core/CardActions";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import IconButton from "@material-ui/core/IconButton";

import { useStateValue, setIsRunning, resetState } from "../state";

const useStyles = makeStyles(() => ({
  timerControls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const TimerControls = React.forwardRef((props, beepRef) => {
  const [{ isRunning }, dispatch] = useStateValue();
  const classes = useStyles();

  const toggleStart = useCallback(() => {
    if (isRunning) {
      dispatch(setIsRunning(false));
    } else {
      dispatch(setIsRunning(true));
    }
  }, [isRunning, dispatch]);

  const reset = useCallback(() => {
    if (beepRef.current) {
      beepRef.current.pause();
      // eslint-disable-next-line no-param-reassign
      beepRef.current.currentTime = 0;
    }
    dispatch(resetState());
  }, [beepRef, dispatch]);

  return (
    <CardActions className={classes.timerControls}>
      <IconButton id="start_stop" onClick={toggleStart} aria-label="start/stop">
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
  );
});

export default TimerControls;
