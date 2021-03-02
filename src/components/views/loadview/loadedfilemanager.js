import React from "react";
import { conn } from "store/connect";
import LoadSimForm from "./loadsimform";

import { Button, Typography } from "@material-ui/core";

const LoadedFileManager = (props) => {
  const simulations = props.data.sim.loadedSims;

  // const colnames = ["PATH"];

  return (
    <div>
      <LoadSimForm />
      LOADED SIMULATIONS:
      <table>
        <thead>
          {/* <tr>
            {colnames.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr> */}
        </thead>
        <tbody>
          {simulations.map((d, i) => (
            <tr key={i}>
              <td>{d}</td>
              <td>
                <Button onClick={() => props.actions.removeSimFile(d)}>
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

export default conn()(LoadedFileManager);
