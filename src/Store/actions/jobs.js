import * as actionTypes from "./actionType";
import { data } from "../../utils/seedData";

export const fetchJobsSuccess = jobs => {
  return {
    type: actionTypes.FETCH_JOB_SUCCESS,
    jobs: jobs
  };
};

export const fetchJobsFail = error => {
  return {
    type: actionTypes.FETCH_JOB_FAIL,
    error: error
  };
};

export const fetchJobsStart = () => {
  return {
    type: actionTypes.FETCH_JOB_START
  };
};

export const fetchJobs = () => {
  return dispatch => {
    dispatch(fetchJobsStart());
    if (!localStorage.getItem("Jobs")) {
      localStorage.setItem("Jobs", JSON.stringify(data));
    }
    const jobs = JSON.parse(localStorage.getItem("Jobs"));
    dispatch(fetchJobsSuccess(jobs));
  };
};
