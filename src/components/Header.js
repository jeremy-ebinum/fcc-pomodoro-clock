import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Header = () => {
  return (
    <Grid item>
      <Typography variant="h2" component="h1" align="center" color="primary">
        Pomodoro Clock
      </Typography>
    </Grid>
  );
};

export default Header;
