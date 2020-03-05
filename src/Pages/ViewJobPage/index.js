import React, { Component } from "react";
import { connect } from "react-redux";

import Appbar from "../../Components/Appbar/Appbar";
import * as actions from "../../Store/actions";
import JobViewCard from "../../Components/JobViewCard";

class ViewJobPage extends Component {
  componentWillMount() {
    const jobId = this.props.match.params.jobId;
    this.props.selectJob(jobId);
  }
  render() {
    return (
      <div>
        <Appbar />
        <div>
          <JobViewCard />
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

export default connect(null, mapDispatchToProps)(ViewJobPage);

// export default compose(
//   withStyles(styles, {
//     withTheme: true
//   }),
//   connect(null, null)
// )(ViewJobPage);
