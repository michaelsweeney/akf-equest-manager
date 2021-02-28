import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { conn } from "../store/connect";

const ReportPicker = (props) => {
  const dummyreports = ["BEPS", "BEPU", "SS-A", "SS-D", "HOURLY"];

  const handleChange = (e, v) => {
    props.actions.setSelectedReports(v);
  };

  const handleExport = () => {
    let { loadedSims, selectedReports, exportFormat } = props.data.sim;
    console.log(exportFormat);
    let exportFormatArray = Object.keys(exportFormat).filter(
      (d) => exportFormat[d] == true
    );

    console.log(exportFormatArray);

    let parameters = `reports=${selectedReports.join(
      ","
    )}&files=${loadedSims.join(",")}&format=${exportFormatArray}`;

    let query = encodeURI(`/exportreports?${parameters}`);

    console.log(query);

    fetch(query);
  };

  return (
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
      <Button color="primary" variant="contained" onClick={handleExport}>
        EXPORT
      </Button>
    </div>
  );
};

export default conn()(ReportPicker);
