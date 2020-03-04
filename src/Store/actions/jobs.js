import * as actionTypes from "./actionType";
import { data } from "../../utils/seedData";
import { store } from "../../App";

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

export const selectJobSuccess = job => {
  return {
    type: actionTypes.SELECT_JOB_SUCCESS,
    job: job
  };
};

export const selectJobFail = error => {
  return {
    type: actionTypes.SELECT_JOB_FAIL,
    error: error
  };
};

export const selectJobStart = () => {
  return {
    type: actionTypes.SELECT_JOB_START
  };
};

export const selectJob = id => {
  return dispatch => {
    dispatch(selectJobStart());
    const jobs = store.getState().jobs.jobs;
    dispatch(fetchJobsSuccess(jobs));
  };
};

export const updateSelectedValue = ({ property, event }) => {
  return {
    type: actionTypes.UPDATE_SELECTED_FIELD,
    payload: {
      property,
      event
    }
  };
};

export const handleAddChip = chip => {
  return {
    type: actionTypes.HANDLE_ADD_CHIP,
    payload: {
      chip
    }
  };
};

export const handleDeleteChip = (chip, index) => {
  return {
    type: actionTypes.HANDLE_DELETE_CHIP,
    payload: {
      chip,
      index
    }
  };
};
