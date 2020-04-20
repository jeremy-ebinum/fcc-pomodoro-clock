import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles(() => ({
  sessionLength: { "&:disabled": { color: grey[900] } },
}));

const SessionControls = () => {
  const classes = useStyles();
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
        <Box id="session-label" fontWeight="bold">
          Session Length
        </Box>
      </Typography>
      <ButtonGroup variant="contained" color="primary" size="small">
        <Button id="session-decrement">
          <RemoveIcon />
        </Button>

        <Button className={classes.sessionLength} variant="text" disabled>
          <Box id="session-length" fontWeight="bold">
            25
          </Box>
        </Button>

        <Button id="session-increment">
          <AddIcon />
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default SessionControls;
