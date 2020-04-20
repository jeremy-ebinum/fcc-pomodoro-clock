import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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

const Timer = () => {
  const classes = useStyles();

  return (
    <Card className={classes.timer} variant="outlined">
      <CardContent className={classes.timerContent}>
        <Typography variant="h4" component="span" align="center">
          <Box id="timer-label" color="text.secondary">
            Session
          </Box>
        </Typography>

        <Divider variant="middle" />

        <Typography variant="h2" component="span" align="center">
          <Box id="time-left" fontWeight="bold">
            25:00
          </Box>
        </Typography>

        <CardActions className={classes.timerControls}>
          <IconButton id="start_stop" aria-label="start/stop">
            <PlayCircleFilledIcon color="action" fontSize="large" />
          </IconButton>
          <IconButton id="reset" aria-label="reset">
            <RotateLeftIcon color="error" fontSize="large" />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Timer;
