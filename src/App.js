import React, { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

import { conn } from "./store/connect";
import ViewContentContainer from "./components/viewcontentcontainer";

import FeedbackDialog from "./components/feedbackdialog";
import Header from "./components/header";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey,
  },
});

const useStyles = makeStyles({
  root: {},
  viewcontainer: {
    padding: 20,
  },
});

const App = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <div className={classes.viewcontainer}>
        <ViewContentContainer />
      </div>

      <FeedbackDialog />
    </ThemeProvider>
  );
};

export default conn()(App);
