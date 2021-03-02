import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";

import { conn } from "store/connect";

import ChartView from "./views/chartview";
import ExportView from "./views/exportview";
import TableView from "./views/tableview";
import LoadView from "./views/loadview";

const ViewContentContainer = (props) => {
  const { activeTab } = props.data.ui;

  const tabcomponents = [
    {
      label: "load_view",
      component: <LoadView />,
    },
    {
      label: "export_view",
      component: <ExportView />,
    },
    {
      label: "table_view",
      component: <TableView />,
    },
    {
      label: "chart_view",
      component: <ChartView />,
    },
  ];
  return (
    <>
      {tabcomponents.map((d) => (
        <div style={{ display: d.label == activeTab ? "block" : "none" }}>
          {d.component}
        </div>
      ))}
    </>
  );
};

export default conn()(ViewContentContainer);
