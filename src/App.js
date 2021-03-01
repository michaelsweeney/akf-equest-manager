import React, { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";

import { conn } from "./store/connect";
import ExportFormatSelector from "./components/exportformatselector";
import LoadedFileManager from "./components/loadedfilemanager";
import ReportPicker from "./components/reportpicker";
import FeedbackDialog from "./components/feedbackdialog";
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  },
});

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography color="primary" variant="h4">
          AKF eQUEST Results Manager
        </Typography>
        <LoadedFileManager />
        <ExportFormatSelector />
        <ReportPicker />
      </Container>

      <FeedbackDialog />
    </ThemeProvider>
  );
};

export default conn()(App);
