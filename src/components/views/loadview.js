import React, { useState, useEffect } from "react";
import { conn } from "store/connect";

import { Button, Typography, TextField, FormGroup } from "@material-ui/core";

const LoadView = (props) => {
  const simulations = props.data.sim.loadedSims;

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let testfile =
      "P:/_Projects/190000/197147-000/D-Design Mgmt/Calc/Energy/eQuest/Nov 2019 LEED Submission Models/network_test/Baseline (LEED)/300 Rouse Base - 4";
    setInputValue(testfile);
    handleFetch(testfile);
  }, []);

  const handleFetch = (file) => {
    fetch(`/validatesim?file=${file}`).then((res) => {
      res.json().then((data) => {
        if (data.isvalid) {
          props.actions.addSimFile(data);
          props.actions.setDialogContent({
            title: "Valid Sim Loaded",
            content: <div>Sim {data.fname} has been loaded</div>,
          });
          props.actions.setDialogOpen(true);
          setInputValue("");
        } else {
          props.actions.setDialogContent({
            title: "Error",
            content: <div>Unable to load {file}</div>,
          });
          props.actions.setDialogOpen(true);
        }
      });
    });
  };

  const handleClick = () => {
    handleFetch(inputValue);
  };

  return (
    <div>
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
        <Button
          disableRipple
          onClick={handleClick}
          color="primary"
          variant="contained"
        >
          ADD
        </Button>
      </div>
      LOADED SIMULATIONS:
      <table>
        <thead></thead>
        <tbody>
          {simulations.map((d, i) => (
            <tr key={i}>
              <td>{d.fname}</td>
              <td>
                <Button
                  disableRipple
                  onClick={() => props.actions.removeSimFile(d)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default conn()(LoadView);
