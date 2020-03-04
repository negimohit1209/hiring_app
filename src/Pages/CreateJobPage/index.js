import React from "react";
import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Appbar from "../../Components/Appbar/Appbar";
import JobForm from "./JobForm/Jobform";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: "10px auto"
  }
}));

export default function CreateJobPage() {
  const classes = useStyles();
  return (
    <div>
      <Appbar />
      <div className={classes.root}>
        <Paper variant="outlined">
          <Typography align="center" variant="h5" component="h2">
            Create Job
          </Typography>
          <JobForm />
        </Paper>
      </div>
    </div>
  );
}
