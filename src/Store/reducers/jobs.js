import * as actionTypes from "../actions/actionType";
import { updateObject } from "../utility";
const initialState = {
  jobs: [],
  loading: false,
  error: false,
  selected: {
    id: "",
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

const selectJobStart = state => {};
const selectJobSuccess = state => {};
const selectJobFail = state => {};

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
  console.log(newSelected);
  return updateObject(state, {
    selected: newSelected
  });
};

const jobformSubmitStart = (state, action) => {
  let newJobs = [...state.jobs];
  let selected = { ...state.selected };
  newJobs.unshift(selected);
  selected = {
    id: "",
    title: "",
    desc: null,
    openPos: 0,
    companyName: "",
    requiredSkills: [],
    location: ""
  };
  return updateObject(state, { loading: true, jobs: newJobs, selected });
};

const jobformSubmitSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
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
    default:
      return state;
  }
};

export default reducer;
