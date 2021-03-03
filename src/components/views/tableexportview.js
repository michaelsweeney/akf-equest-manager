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

const TableExportView = (props) => {
  const selectedOptions = props.data.sim.exportFormat;

  const handleCheck = (e) => {
    props.actions.setExportFormat({
      ...selectedOptions,
      [e.target.name]: e.target.checked,
    });
  };

  const optionarray = [
    {
      tag: "xl",
      label: "Excel File",
    },
    {
      tag: "csv",
      label: "CSV File(s)",
    },
  ];

  const dummyreports = ["BEPS", "BEPU", "SS-A", "SS-D", "HOURLY"];

  const handleChange = (e, v) => {
    props.actions.setSelectedReports(v);
  };

  const handleExport = () => {
    let { loadedSims, selectedReports, exportFormat } = props.data.sim;

    let exportFormatArray = Object.keys(exportFormat).filter(
      (d) => exportFormat[d] == true
    );
    let loadedSimArray = loadedSims.map((d) => d.fullpath);

    let parameters = `reports=${selectedReports.join(
      ","
    )}&files=${loadedSimArray.join(",")}&format=${exportFormatArray}`;

    let query = encodeURI(`/exportreports?${parameters}`);

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
        <Typography>Export Options</Typography>
        <FormControl>
          {optionarray.map((d, i) => (
            <FormControlLabel
              key={i}
              control={
                <Checkbox
                  checked={selectedOptions[d.tag]}
                  onChange={handleCheck}
                  name={d.tag}
                />
              }
              label={d.label}
            />
          ))}
        </FormControl>
      </div>
      <div>
        <Autocomplete
          multiple
          options={dummyreports}
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

export default conn()(TableExportView);
