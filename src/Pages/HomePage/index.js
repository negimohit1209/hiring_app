import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import compose from "lodash/fp/compose";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Appbar from "../../Components/Appbar/Appbar";
import JobCard from "../../Components/JobCard";
import Pagination from "@material-ui/lab/Pagination";
import * as actions from "../../Store/actions";

const styles = theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
});
class HomePage extends Component {
  componentWillMount() {
    this.props.onFetchJobs();
  }
  state = {
    page: 1
  };
  handleChange = (event, value) => {
    this.setState({ page: value });
  };

  render() {
    const { classes } = this.props;
    const initialPos = (this.state.page - 1) * 3;
    const finalPos = Math.min(initialPos + 3, this.props.jobs.length);
    const paginateJobs = this.props.jobs.slice(initialPos, finalPos);
    return (
      <div className={classes.root}>
        <Appbar />
        <div>
          {paginateJobs.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
        <Fab
          color="secondary"
          component={Link}
          to="/create"
          style={{ position: "fixed", bottom: "20px", right: "20px" }}
          aria-label="edit"
        >
          <AddIcon />
        </Fab>
        <div style={{ textAlign: "center", width: "100%" }}>
          <div style={{ display: "inline-block" }}>
            <Pagination
              count={Math.ceil(this.props.jobs.length / 4)}
              page={this.state.page}
              onChange={this.handleChange}
              color="primary"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    jobs: state.jobs.jobs
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchJobs: () => dispatch(actions.fetchJobs())
  };
};

export default compose(
  withStyles(styles, {
    withTheme: true
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
