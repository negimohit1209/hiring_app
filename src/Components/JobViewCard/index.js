import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Editor, EditorState, convertFromRaw } from "draft-js";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import * as actions from "../../Store/actions";

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
    maxWidth: 900,
    margin: "10px auto"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  chip_root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginLeft: "0"
    }
  }
}));

function JobViewCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.selected.companyName}
        </Typography>
        <Typography variant="h4" component="h2">
          {props.selected.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.selected.location}
          {bull}
          Open Position: {props.selected.openPos}
        </Typography>
        <Typography variant="h5" component="h3">
          Job Description:
        </Typography>
        <div>
          <Editor
            editorState={EditorState.createWithContent(
              convertFromRaw(props.selected.desc)
            )}
            readOnly={true}
          />
        </div>
        <div className={classes.chip_root}>
          {props.selected.requiredSkills.map((skill, i) => (
            <Chip key={i} color="secondary" size="small" label={skill} />
          ))}
        </div>
        <div className={classes.chip_root}>
          <Button
            component={Link}
            to={`/update/${props.selected.id}`}
            variant="contained"
            className=""
            color="primary"
            size="small"
            // endIcon={<Icon>send</Icon>}
          >
            Update
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    deleteJob: id => dispatch(actions.deleteJob(id))
  };
};

const mapStateToProps = state => {
  return {
    selected: state.jobs.selected
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobViewCard);
