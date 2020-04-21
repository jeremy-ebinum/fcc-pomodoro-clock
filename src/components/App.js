import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import NavBar from "./NavBar";
import DarkModeSwitch from "./DarkModeSwitch";
import BreakControls from "./BreakControls";
import SessionControls from "./SessionControls";
import Timer from "./Timer";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(0),
    width: "100%",
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />

      <Grid
        className={classes.wrapper}
        container
        direction="column"
        justify="center"
        alignContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid container spacing={1} justify="center" item>
          <BreakControls />

          <SessionControls />
        </Grid>

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          item
          xs={12}
        >
          <Timer />
        </Grid>

        <Grid item>
          <DarkModeSwitch />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
