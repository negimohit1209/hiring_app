import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import "./App.css";
import AppLayout from "./HOC/Layout/AppLayout";
import jobsReducer from "./Store/reducers/jobs";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// process.env.NODE_ENV === "development"
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   : null || compose;

const rootReducer = combineReducers({
  jobs: jobsReducer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

export default App;
