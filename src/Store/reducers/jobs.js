import * as actionTypes from "../actions/actionType";
import { updateObject } from "../utility";
const initialState = {
  jobs: [],
  loading: false,
  error: false,
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
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_JOB_START:
      return fetchJobsStart(state, action);
    case actionTypes.FETCH_JOB_SUCCESS:
      return fetchJobsSuccess(state, action);
    case actionTypes.FETCH_JOB_FAIL:
      return fetchJobsFail(state, action);
    default:
      return state;
  }
};

export default reducer;
