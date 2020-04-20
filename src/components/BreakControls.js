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
  breakLength: { "&:disabled": { color: grey[900] } },
}));

const BreakControls = () => {
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
        <Box id="break-label" fontWeight="bold">
          Break Length
        </Box>
      </Typography>
      <ButtonGroup variant="contained" color="primary" size="small">
        <Button id="break-decrement">
          <RemoveIcon />
        </Button>

        <Button className={classes.breakLength} variant="text" disabled>
          <Box id="break-length" fontWeight="bold">
            5
          </Box>
        </Button>

        <Button id="break-increment">
          <AddIcon />
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

export default BreakControls;
