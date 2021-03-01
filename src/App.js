import React, { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

import { conn } from "./store/connect";
import ExportFormatSelector from "./components/exportformatselector";
import LoadedFileManager from "./components/loadedfilemanager";
import ReportPicker from "./components/reportpicker";
import FeedbackDialog from "./components/feedbackdialog";
import Header from "./components/header";
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey,
  },
});

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <LoadedFileManager />
        <ExportFormatSelector />
        <ReportPicker />
      </Container>

      <FeedbackDialog />
    </ThemeProvider>
  );
};

export default conn()(App);
