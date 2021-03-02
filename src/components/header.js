import React, { useState, useEffect } from "react";

import { AppBar, Tabs, TabPanel, Tab, Typography } from "@material-ui/core";
import { conn } from "store/connect";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: { boxSizing: "border-box", overflow: "hidden", whiteSpace: "nowrap" },

  img: {
    height: "75px",
    float: "right",
    verticalAlign: "middle",
    paddingRight: "20px",
    position: "relative",
    top: 12,
    // paddingTop: 10,
    // marginTop: "20px",
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
      <div className={classes.root}>
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
        <Tab disableRipple value="load_view" label="LOAD" />
        <Tab disableRipple value="table_export_view" label="TABLE EXPORT" />
        <Tab disableRipple value="table_display_view" label="TABLE VIEW" />
        <Tab disableRipple value="text_export_view" label="TEXT EXPORT" />
        <Tab disableRipple value="text_display_view" label="TEXT VIEW" />
        <Tab disableRipple value="chart_view" label="HOURLY VIS" />
      </Tabs>
    </AppBar>
  );
};

export default conn()(Header);
