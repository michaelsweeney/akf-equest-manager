import React, { useState, useEffect } from "react";

import { Container, Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { red, blue } from "@material-ui/core/colors";

import { conn } from "./store/connect";
import ExportFormatSelector from "./components/exportformatselector";
import LoadedFileManager from "./components/loadedfilemanager";
import ReportPicker from "./components/reportpicker";

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  },
});

const App = (props) => {
  const [currentResponse, setCurrentResponse] = useState({});

  // useEffect(() => {
  //   fetch("/test").then((res) => {
  //     console.log(res);
  //     res.json().then((data) => {
  //       console.log(data);
  //       setCurrentResponse(data);
  //     });
  //   });
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography color="primary" variant="h4">
          AKF eQUEST Results Manager
        </Typography>
        <LoadedFileManager />
        <ExportFormatSelector />
        <ReportPicker />
        <div>
          {/* -- def feedback: python API response */}
          {/* <div>{JSON.stringify(currentResponse)}</div> */}
        </div>
        <div>
          {/* -- def feedback: redux state */}
          {/* <div> {JSON.stringify(props.data)}</div> */}
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default conn()(App);
