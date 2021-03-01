import React, { useState, useEffect } from "react";

import { TextField, Button, FormGroup } from "@material-ui/core";
import { conn } from "../store/connect";

// sample sim...
// P:\_Projects\190000\197147-000\D-Design Mgmt\Calc\Energy\eQuest\Nov 2019 LEED Submission Models\300 Rouse PropC - Baseline Design

const LoadSimForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    // validate simfile. this should be in a separate file
    fetch(`/validatesim?file=${inputValue}`).then((res) => {
      res.json().then((data) => {
        const { isvalid, directory, fname } = data;

        if (isvalid) {
          props.actions.addSimFile(inputValue);
          props.actions.setDialogContent({
            title: "Valid Sim Loaded",
            content: <div>Sim {fname} has been loaded</div>,
          });
          props.actions.setDialogOpen(true);
          setInputValue("");
        } else {
          props.actions.setDialogContent({
            title: "Error",
            content: <div>Unable to load {inputValue}</div>,
          });
          props.actions.setDialogOpen(true);
        }
      });
    });
  };

  return (
    <div>
      <FormGroup>
        <TextField
          placeholder="SIM Path (do not include extension)"
          label="SIM Path"
          fullWidth
          value={inputValue}
          onChange={(d) => setInputValue(d.target.value)}
        />
      </FormGroup>
      <Button onClick={handleClick} color="primary" variant="contained">
        ADD
      </Button>
    </div>
  );
};

export default conn()(LoadSimForm);
