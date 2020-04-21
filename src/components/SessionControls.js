import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useStateValue, incrementSession, decrementSession } from "../state";

const useStyles = makeStyles((theme) => ({
  sessionLength: { "&:disabled": { color: theme.palette.text.primary } },
}));

const SessionControls = () => {
  const [{ sessionLength, isRunning }, dispatch] = useStateValue();
  const classes = useStyles();

  const increaseSessionLength = useCallback(() => {
    if (sessionLength < 60) {
      dispatch(incrementSession());
    }
  }, [sessionLength, dispatch]);

  const decreaseSessionLength = useCallback(() => {
    if (sessionLength > 1) {
      dispatch(decrementSession());
    }
  }, [sessionLength, dispatch]);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      item
      xs={12}
      sm={4}
      md={2}
    >
      <Typography variant="button" align="center">
        <Box id="session-label" fontWeight={500}>
          Session Length
        </Box>
      </Typography>
      <ButtonGroup variant="contained" color="primary" size="small">
        <Button
          id="session-decrement"
          onClick={decreaseSessionLength}
          disabled={isRunning}
        >
          <RemoveIcon />
        </Button>

        <Button className={classes.sessionLength} variant="text" disabled>
          <Box id="session-length" fontWeight="bold">
            {sessionLength}
          </Box>
        </Button>

        <Button
          id="session-increment"
          onClick={increaseSessionLength}
          disabled={isRunning}
        >
          <AddIcon />
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default SessionControls;
