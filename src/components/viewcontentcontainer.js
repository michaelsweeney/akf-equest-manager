import React, { useState, useEffect } from "react";

import { Typography } from "@material-ui/core";

import { conn } from "store/connect";

import LoadView from "./views/loadview";

import ChartView from "./views/chartview";
import TableExportView from "./views/tableexportview";
import TableDisplayView from "./views/tabledisplayview";
import TextExportView from "./views/textexportview";
import TextDisplayView from "./views/textdisplayview";

const ViewContentContainer = (props) => {
  const { activeTab } = props.data.ui;

  const tabcomponents = [
    {
      label: "load_view",
      component: <LoadView />,
    },
    {
      label: "table_export_view",
      component: <TableExportView />,
    },
    {
      label: "table_display_view",
      component: <TableDisplayView />,
    },
    {
      label: "text_export_view",
      component: <TextExportView />,
    },
    {
      label: "text_display_view",
      component: <TextDisplayView />,
    },
    {
      label: "chart_view",
      component: <ChartView />,
    },
  ];
  return (
    <>
      {tabcomponents.map((d, i) => (
        <div
          key={i}
          style={{ display: d.label == activeTab ? "block" : "none" }}
        >
          {d.component}
        </div>
      ))}
    </>
  );
};

export default conn()(ViewContentContainer);
