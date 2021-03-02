import React, { useState, useEffect } from "react";

import { AppBar, Tabs, TabPanel, Tab, Typography } from "@material-ui/core";
import { conn } from "store/connect";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},

  img: {
    height: "75px",
    float: "right",
    verticalAlign: "middle",
    paddingRight: "20px",
  },
  title: {
    float: "left",
    fontSize: 28,
    paddingTop: 25,
    paddingLeft: 15,
    letterSpacing: 1.5,
  },
});

const Header = (props) => {
  const classes = useStyles();

  const handleTabChange = (e, v) => {
    props.actions.setActiveTab(v);
  };
  return (
    <AppBar className={classes.root} color="transparent" position="static">
      <div>
        <span>
          <Typography
            component="span"
            className={classes.title}
            color="primary"
          >
            eQUEST sim results manager
          </Typography>
        </span>
        <span>
          <img className={classes.img} src="/img/akflogo.png" />
        </span>
      </div>

      <Tabs value={props.data.ui.activeTab} onChange={handleTabChange}>
        <Tab value="load_view" label="LOAD" />
        <Tab value="export_view" label="REPORT EXPORT" />
        <Tab value="table_view" label="TABLE VIEW" />
        <Tab value="chart_view" label="HOURLY VIS" />
      </Tabs>
    </AppBar>
  );
};

export default conn()(Header);
