import React, { useState, useCallback } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import AboutDialog from "./AboutDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClose = useCallback(() => setOpen(false), []);

  const openAboutDialog = useCallback(() => setOpen(true), []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="h1" className={classes.title}>
            Pomodoro Clock
          </Typography>
          <Button variant="outlined" color="inherit" onClick={openAboutDialog}>
            About
          </Button>
        </Toolbar>
      </AppBar>

      <AboutDialog open={open} handleClose={handleClose} />
    </div>
  );
};

export default NavBar;
