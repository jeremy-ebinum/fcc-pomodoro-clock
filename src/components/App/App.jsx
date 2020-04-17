import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(0),
    width: "100%",
    flexGrow: 1,
  },
  disabledButton: { "&:disabled": { color: grey[900] } },
  timer: {
    borderRadius: "47%",
    padding: theme.spacing(2),
  },
  content: { padding: theme.spacing(5) },
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.wrapper}
      container
      direction="column"
      justify="center"
      alignContent="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <Typography variant="h2" component="h1" align="center" color="primary">
          Pomodoro Clock
        </Typography>
      </Grid>

      <Grid container spacing={1} justify="center" item>
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
            <Box fontWeight="bold">Break Length</Box>
          </Typography>
          <ButtonGroup variant="contained" color="primary" size="small">
            <Button>
              <RemoveIcon />
            </Button>

            <Button className={classes.disabledButton} variant="text" disabled>
              <Box fontWeight="bold">5</Box>
            </Button>

            <Button>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Grid>

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
            <Box fontWeight="bold">Session Length</Box>
          </Typography>
          <ButtonGroup variant="contained" size="small" color="primary">
            <Button>
              <RemoveIcon />
            </Button>

            <Button className={classes.disabledButton} variant="text" disabled>
              <Box fontWeight="bold">25</Box>
            </Button>

            <Button>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        item
        xs={12}
      >
        <Card className={classes.timer} variant="outlined">
          <CardContent className={classes.content}>
            <Typography variant="h4" component="span" align="center">
              <Box color="text.secondary">Session</Box>
            </Typography>

            <Divider variant="middle" />

            <Typography variant="h2" component="span" align="center">
              <Box fontWeight="bold">25 : 00</Box>
            </Typography>

            <CardActions className={classes.controls}>
              <IconButton aria-label="start/pause">
                <PlayCircleFilledIcon color="action" fontSize="large" />
              </IconButton>
              <IconButton aria-label="reset">
                <RotateLeftIcon color="error" fontSize="large" />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default App;
