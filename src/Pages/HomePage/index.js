import React, { Component } from "react";
import { connect } from "react-redux";
import Appbar from "../../Components/Appbar/Appbar";
import JobCard from "../../Components/JobCard";
import * as actions from "../../Store/actions";

class HomePage extends Component {
  componentDidMount() {
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
