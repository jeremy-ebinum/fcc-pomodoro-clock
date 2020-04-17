import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const App = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h1" align="center" color="primary">
          Pomodoro Clock
        </Typography>
      </Grid>
    </Grid>
  );
};

export default App;
