import React, { useState, useEffect } from "react";

import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  Checkbox,
  TextField,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { conn } from "store/connect";

const TextExportView = (props) => {
  const { loadedSims } = props.data.sim;

  const getUniqueReports = (simarray, keyname) => {
    let array = [];
    simarray.forEach((sim) => {
      sim[keyname].forEach((d) => {
        if (!array.includes(d)) {
          array.push(d);
        }
      });
    });
    return array;
  };

  const handleChange = (e, v) => {
    props.actions.setSelectedTextReports(v);
  };
  const optionarray = getUniqueReports(loadedSims, "report_keys");

  const handleExport = () => {
    let { loadedSims, selectedTextReports } = props.data.sim;
    const queryArray = selectedTextReports.map((e) => e.split(" ")[0]);
    let loadedSimArray = loadedSims.map((d) => d.fullpath);
    let parameters = `reports=${queryArray.join(
      ","
    )}&files=${loadedSimArray.join(",")}`;
    let query = encodeURI(`/exporttextreports?${parameters}`);
    fetch(query).then((response) => {
      response.json().then((data) => {
        props.actions.setDialogContent({
          title: "export feedback",
          content: JSON.stringify(data),
        });
        props.actions.setDialogOpen(true);
      });
    });
  };

  return (
    <div>
      <div>
        <Autocomplete
          multiple
          options={optionarray}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select SIM / HSR Reports"
              variant="outlined"
            />
          )}
        />
        <Button
          disableRipple
          color="primary"
          variant="contained"
          onClick={handleExport}
        >
          EXPORT
        </Button>
      </div>
    </div>
  );
};

export default conn()(TextExportView);
