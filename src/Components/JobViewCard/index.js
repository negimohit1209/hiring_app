import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
        <Typography variant="h5" component="h2">
          {props.selected.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.selected.location}
          {bull}
          Open Position: {props.selected.openPos}
        </Typography>
        {/* <Typography variant="body2" component="p">
          {props.job.desc}
        </Typography> */}
        <div className={classes.chip_root}>
          {props.selected.requiredSkills.map((skill, i) => (
            <Chip key={i} color="secondary" size="small" label={skill} />
          ))}
        </div>
        <div className={classes.chip_root}>
          <Button
            component={Link}
            onClick={handleOpen}
            size="small"
            color="error"
            className={classes.button}
            // startIcon={< />}
          >
            Delete
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h2 id="transition-modal-title">Are you Sure?</h2>
                <p id="transition-modal-description">
                  Do you really want to delete this job.
                </p>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  onClick={() => {
                    props.deleteJob(props.selected.id);
                    handleClose();
                  }}
                  // endIcon={<Icon>send</Icon>}
                >
                  Yes
                </Button>
              </div>
            </Fade>
          </Modal>
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
          <Button
            component={Link}
            to={`update/${props.selected.id}`}
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
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