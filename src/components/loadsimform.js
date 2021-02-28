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
        let isvalidsim = data.msg;
        if (isvalidsim) {
          props.actions.addSimFile(inputValue);
          alert(`Sim File ${inputValue} successfully loaded`);
        } else {
          alert("Error Loading Sim file");
        }
      });
    });
    setInputValue("");
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
        <Button onClick={handleClick} color="primary" variant="outlined">
          ADD
        </Button>
      </FormGroup>
    </div>
  );
};

export default conn()(LoadSimForm);
