import React, { useState, useEffect } from "react";

import {
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Typography,
  Checkbox,
} from "@material-ui/core";
import { conn } from "../store/connect";

const ExportFormatSelector = (props) => {
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
    {
      tag: "sim",
      label: "SIM file (for printing)",
    },
  ];

  return (
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
  );
};

export default conn()(ExportFormatSelector);
