import React, { useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useStateValue, incrementBreak, decrementBreak } from "../state";

const useStyles = makeStyles((theme) => ({
  breakLength: { "&:disabled": { color: theme.palette.text.primary } },
}));

const BreakControls = () => {
  const [{ breakLength, isRunning }, dispatch] = useStateValue();
  const classes = useStyles();

  const increaseBreakLength = useCallback(() => {
    if (breakLength < 60) {
      dispatch(incrementBreak());
    }
  }, [breakLength, dispatch]);

  const decreaseBreakLength = useCallback(() => {
    if (breakLength > 1) {
      dispatch(decrementBreak());
    }
  }, [breakLength, dispatch]);

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
        <Box id="break-label" fontWeight={500}>
          Break Length
        </Box>
      </Typography>
      <ButtonGroup variant="contained" color="primary" size="small">
        <Button
          id="break-decrement"
          onClick={decreaseBreakLength}
          disabled={isRunning}
        >
          <RemoveIcon />
        </Button>

        <Button className={classes.breakLength} variant="text" disabled>
          <Box id="break-length" fontWeight="bold" disabled={isRunning}>
            {breakLength}
          </Box>
        </Button>

        <Button
          id="break-increment"
          onClick={increaseBreakLength}
          disabled={isRunning}
        >
          <AddIcon />
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default BreakControls;
