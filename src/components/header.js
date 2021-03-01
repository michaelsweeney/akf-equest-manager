import React, { useState, useEffect } from "react";

import { AppBar, Tabs, TabPanel, Tab, Typography } from "@material-ui/core";
import { conn } from "../store/connect";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {},
  span: {
    display: "inline-block !important",
  },
  img: {
    height: "75px",
    marginLeft: 20,
  },
  title: {
    position: "relative",
    bottom: 25,
    left: 20,
  },
});

const Header = (props) => {
  const classes = useStyles();

  const handleTabChange = (e, v) => {
    props.actions.setActiveTab(v);
  };
  return (
    <AppBar className={classes.root} color="transparent" position="static">
      <div className={classes.span}>
        <img className={classes.img} src="/img/akflogo.png" />
        <Typography
          className={classes.title}
          variant="h4"
          component={"span"}
          color="primary"
        >
          eQUEST Results Manager
        </Typography>
      </div>

      <Tabs value={props.data.ui.activeTab} onChange={handleTabChange}>
        <Tab value="load" label="LOAD" />
        <Tab value="report_export" label="REPORT EXPORT" />
        <Tab value="table_view" label="TABLE VIEW" />
        <Tab value="text_view" label="TEXT VIEW" />
        <Tab label="hourly_vis" label="HOURLY VIS" />
      </Tabs>
    </AppBar>
  );
};

export default conn()(Header);
