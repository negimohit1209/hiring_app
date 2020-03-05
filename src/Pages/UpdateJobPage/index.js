import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import compose from "lodash/fp/compose";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Appbar from "../../Components/Appbar/Appbar";
import JobForm from "../CreateJobPage/JobForm/Jobform";
import * as actions from "../../Store/actions";

const styles = theme => ({
  root: {
    minWidth: 275,
    maxWidth: 800,
    margin: "10px auto"
  }
});

class UpdateJobPage extends Component {
  componentWillMount() {
    const jobId = this.props.match.params.jobId;
    this.props.selectJob(jobId);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Appbar />
        <div className={classes.root}>
          <Paper variant="outlined">
            <Typography align="center" variant="h5" component="h2">
              Update job
            </Typography>
            <JobForm />
          </Paper>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectJob: id => dispatch(actions.selectJob(id))
  };
};

export default compose(
  withStyles(styles, {
    withTheme: true
  }),
  connect(null, mapDispatchToProps)
)(UpdateJobPage);
