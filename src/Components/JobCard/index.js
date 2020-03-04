import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: "10px auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  chip_root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: "0"
    }
  }
}));

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.job.companyName}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.job.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.job.location}
          {bull}
          Open Position: {props.job.openPos}
        </Typography>
        <Typography variant="body2" component="p">
          {props.job.desc}
        </Typography>
        <div className={classes.chip_root}>
          {props.job.skillsRequired.map((skill, i) => (
            <Chip key={i} color="secondary" size="small" label={skill} />
          ))}
        </div>
        <div className={classes.chip_root}>
          <Button
            variant="contained"
            size="small"
            color="error"
            className={classes.button}
            // startIcon={< />}
          >
            Delete
          </Button>
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            // endIcon={<Icon>send</Icon>}
          >
            Update
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
