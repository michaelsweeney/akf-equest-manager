import React from "react";
import { conn } from "store/connect";
import { Dialog, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {},
  content: {
    padding: "20px",
  },
});

const FeedbackDialog = (props) => {
  const classes = useStyles();
  const { dialogOpen, dialogContent } = props.data.ui;
  const handleclose = () => {
    props.actions.setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onClose={handleclose}>
      <DialogTitle>{dialogContent.title}</DialogTitle>
      <div className={classes.content}>{dialogContent.content}</div>
    </Dialog>
  );
};

export default conn()(FeedbackDialog);
