import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const AboutDialog = ({ open, handleClose }) => {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="about-dialog-title"
    >
      <DialogTitle id="about-dialog-title">About the App</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The{" "}
          <Link
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pomodoro Technique
          </Link>{" "}
          is a time management method developed by Francesco Cirillo in the late
          1980s. The technique uses a timer to break down work into intervals,
          traditionally 25 minutes in length, separated by short breaks.
        </DialogContentText>

        <DialogContentText>
          Set the desired break time and work session time using the controls
          and the app will alternate the timer countdown between both phases.
        </DialogContentText>

        <DialogContentText>
          Written by{" "}
          <Link
            href="https://github.com/jeremy-ebinum/"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
          >
            Jeremy Ebinum
          </Link>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="inherit"
          autoFocus
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AboutDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AboutDialog;
