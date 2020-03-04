import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import TextEditor from "../../../Components/TextEditor/Texteditor";
import ChipInput from "material-ui-chip-input";
import Button from "@material-ui/core/Button";
import * as actions from "../../../Store/actions";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: 300
    }
  },
  formFeild: {
    margin: theme.spacing(2),
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(2),
    textAlign: "center"
  }
}));

function Jobform({
  selected,
  onUpdateSelectedValue,
  handleAddChip,
  handleDeleteChip,
  handleSubmit
}) {
  const classes = useStyles();
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={event => {
        event.preventDefault();
        handleSubmit();
      }}
    >
      <div className={classes.formFeild}>
        <TextField
          required
          id="title"
          label="Title"
          variant="outlined"
          InputProps={{
            value: selected.title,
            onChange: event => onUpdateSelectedValue("title", event)
          }}
        />
        <TextField
          required
          id="companyName"
          label="Company Name"
          variant="outlined"
          InputProps={{
            value: selected.companyName,
            onChange: event => onUpdateSelectedValue("companyName", event)
          }}
        />

        <TextField
          id="openPos"
          label="Positions"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
          InputProps={{
            value: selected.openPos,
            onChange: event => onUpdateSelectedValue("openPos", event)
          }}
        />
        <TextField
          required
          id="outlined-required"
          label="Location"
          variant="outlined"
          InputProps={{
            value: selected.location,
            onChange: event => onUpdateSelectedValue("location", event)
          }}
        />
        <p>Description</p>
        <TextEditor content={selected.desc} />
        <ChipInput
          value={selected.requiredSkills}
          fullWidth
          label="Required Skills"
          variant="outlined"
          onAdd={chip => handleAddChip(chip)}
          onDelete={(chip, index) => handleDeleteChip(chip, index)}
        />
      </div>
      <div className={classes.button}>
        <Button variant="contained" color="primary" type="submit">
          Primary
        </Button>
      </div>
    </form>
  );
}

const mapStateToProps = state => {
  return {
    selected: state.jobs.selected
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onUpdateSelectedValue: (property, event) =>
      dispatch(actions.updateSelectedValue({ property, event })),
    handleAddChip: chip => dispatch(actions.handleAddChip(chip)),
    handleDeleteChip: (chip, index) =>
      dispatch(actions.handleDeleteChip(chip, index)),
    handleSubmit: () => dispatch(actions.jobFormSubmit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobform);
