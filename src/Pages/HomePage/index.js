import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Appbar from "../../Components/Appbar/Appbar";
import JobCard from "../../Components/JobCard";
import * as actions from "../../Store/actions";

class HomePage extends Component {
  componentWillMount() {
    this.props.onFetchJobs();
  }
  render() {
    return (
      <div>
        <Appbar />
        <div>
          {this.props.jobs.map((job, i) => (
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
