import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import getTheme from "../../utils/theme";
import HomePage from "../../Pages/HomePage";
import CreateJobPage from "../../Pages/CreateJobPage";

export default function AppLayout() {
  return (
    <Router>
      <MuiThemeProvider theme={getTheme("light")}>
        <CssBaseline />
        <Switch>
          <Route path="/create" component={CreateJobPage} />
          <Route path="/" exact component={HomePage} />
          <Redirect to="/" />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
}
