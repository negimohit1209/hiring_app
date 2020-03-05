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
    const jobs = JSON.parse(localStorage.getItem("Jobs"));
    const job = jobs.find(job => job.id == id);
    console.log(job);
    dispatch(selectJobSuccess(job));
  };
};

export const deleteJobStart = id => {
  return {
    type: actionTypes.DELETE_JOB_START,
    id: id
  };
};

export const deleteJobSuccess = () => {
  return {
    type: actionTypes.DELETE_JOB_SUCCESS
  };
};

export const deleteJobFail = error => {
  return {
    type: actionTypes.DELETE_JOB_FAIL,
    error: error
  };
};

export const deleteJob = id => {
  return dispatch => {
    dispatch(deleteJobStart(id));
    let jobs = [...store.getState().jobs.jobs];
    localStorage.setItem("Jobs", JSON.stringify(jobs));
    dispatch(deleteJobSuccess());
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

export const updateTextEditor = data => {
  console.log(data);
  return {
    type: actionTypes.UPDATE_TEXT_EDITOR,
    payload: data
  };
};

export const jobformSubmitSuccess = jobs => {
  return {
    type: actionTypes.JOB_FORM_SUBMIT_SUCCESS,
    jobs: jobs
  };
};

export const jobformSubmitFail = error => {
  return {
    type: actionTypes.JOB_FORM_SUBMIT_FAIL,
    error: error
  };
};

export const jobformSubmitStart = () => {
  return {
    type: actionTypes.JOB_FORM_SUBMIT_START
  };
};

export const initSelect = () => {
  return {
    type: actionTypes.INIT_SELECT
  };
};

export const jobFormSubmit = id => {
  return dispatch => {
    dispatch(jobformSubmitStart());
    let job = store.getState().jobs.selected;
    let jobs = store.getState().jobs.jobs;
    if (jobs.length === 0) {
      dispatch(fetchJobs());
    }
    jobs = store.getState().jobs.jobs;
    // JSON.parse(localStorage.getItem("Jobs"));
    if (id != null) {
      let index = jobs.findIndex(job => job.id === id);
      if (index !== -1) {
        jobs[index] = job;
      } else {
        // some error will be thrown
      }
    } else {
      job = { ...job, id: Date.now() };
      jobs = [job, ...jobs];
    }
    localStorage.setItem("Jobs", JSON.stringify(jobs));
    dispatch(jobformSubmitSuccess(jobs));
  };
};
