import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 300
    }
  },
  formFeild: {
    textAlign: "center"
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.formFeild}>
        <TextField
          required
          id="outlined-required"
          label="Title"
          variant="outlined"
          value=""
        />
        <TextField
          required
          id="outlined-required"
          label="Company Name"
          variant="outlined"
          value=""
        />

        <TextField
          id="outlined-number"
          label="Positions"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Location"
          variant="outlined"
          value=""
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
        />
      </div>
    </form>
  );
}
