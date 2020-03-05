import * as actionTypes from "../actions/actionType";
import { updateObject } from "../utility";
const initialState = {
  jobs: [],
  loading: false,
  error: false,
  selected: {
    id: null,
    title: "",
    desc: null,
    openPos: 0,
    companyName: "",
    requiredSkills: [],
    location: ""
  },
  pagelength: 5
};

const fetchJobsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchJobsSuccess = (state, action) => {
  return updateObject(state, {
    jobs: action.jobs,
    loading: false
  });
};
const fetchJobsFail = (state, action) => {
  return updateObject(state, { loading: false, error: true });
};

const selectJobStart = state => {
  return updateObject(state, { loading: true });
};
const selectJobSuccess = (state, action) => {
  const newSelected = action.job;
  return updateObject(state, { selected: newSelected });
};
// const selectJobFail = state => {};

const updateSelectedValue = (state, action) => {
  const newSelected = updateObject(state.selected, {
    [action.payload.property]: action.payload.event.target.value
  });
  return updateObject(state, {
    selected: newSelected
  });
};

const handleAddChip = (state, action) => {
  const newRequiredSkills = [
    ...state.selected.requiredSkills,
    action.payload.chip
  ];
  const newSelected = updateObject(state.selected, {
    requiredSkills: newRequiredSkills
  });
  return updateObject(state, {
    selected: newSelected
  });
};

const handleDeleteChip = (state, action) => {
  const { index } = action.payload;
  const newRequiredSkills = [...state.selected.requiredSkills];
  newRequiredSkills.splice(index, 1);
  const newSelected = updateObject(state.selected, {
    requiredSkills: newRequiredSkills
  });
  return updateObject(state, {
    selected: newSelected
  });
};

const updateTextEditor = (state, action) => {
  const newDesc = action.payload;
  const newSelected = updateObject(state.selected, {
    desc: newDesc
  });
  return updateObject(state, {
    selected: newSelected
  });
};

const jobformSubmitStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const jobformSubmitSuccess = (state, action) => {
  let newSelected = {
    id: "",
    title: "",
    desc: null,
    openPos: 0,
    companyName: "",
    requiredSkills: [],
    location: ""
  };
  return updateObject(state, {
    loading: false,
    selected: newSelected,
    jobs: action.jobs
  });
};

const deleteJobStart = (state, action) => {
  // console.log(`id = ${action.id}`);
  let jobs = [...state.jobs];
  let jobId = action.id;
  jobs = jobs.filter(job => job.id !== jobId);
  return updateObject(state, { loading: true, jobs });
};

const deleteJobSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};

const initSelect = (state, action) => {
  const selected = {
    id: null,
    title: "",
    desc: null,
    openPos: 0,
    companyName: "",
    requiredSkills: [],
    location: ""
  };
  return updateObject(state, {
    selected
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JOB_START:
      return fetchJobsStart(state, action);
    case actionTypes.FETCH_JOB_SUCCESS:
      return fetchJobsSuccess(state, action);
    case actionTypes.FETCH_JOB_FAIL:
      return fetchJobsFail(state, action);
    case actionTypes.UPDATE_SELECTED_FIELD:
      return updateSelectedValue(state, action);
    case actionTypes.HANDLE_ADD_CHIP:
      return handleAddChip(state, action);
    case actionTypes.HANDLE_DELETE_CHIP:
      return handleDeleteChip(state, action);
    case actionTypes.UPDATE_TEXT_EDITOR:
      return updateTextEditor(state, action);
    case actionTypes.JOB_FORM_SUBMIT_START:
      return jobformSubmitStart(state, action);
    case actionTypes.JOB_FORM_SUBMIT_SUCCESS:
      return jobformSubmitSuccess(state, action);
    case actionTypes.SELECT_JOB_START:
      return selectJobStart(state, action);
    case actionTypes.SELECT_JOB_SUCCESS:
      return selectJobSuccess(state, action);
    case actionTypes.DELETE_JOB_START:
      return deleteJobStart(state, action);
    case actionTypes.DELETE_JOB_SUCCESS:
      return deleteJobSuccess(state, action);
    case actionTypes.INIT_SELECT:
      return initSelect(state, action);
    default:
      return state;
  }
};

export default reducer;
