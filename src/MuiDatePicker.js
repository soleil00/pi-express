import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

export const MuiDatePicker = () => {
  const [value, setValue] = useState();
  return (
    <Box>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            width: "300px",
            margin: "auto",
          }}
        >
          <TabList
            aria-label="tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            onChange={(e) => setValue(e.target.value)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Buy" value="buy" />
            <Tab label="Sell" value="sell" />
            <Tab label="test" value="1" />
            <Tab label="tab 2" value="2" />
            <Tab label="Tab 3" value="3" />
            <Tab label="Tab 4" value="4" />
          </TabList>
        </Box>
        <TabPanel value="buy">buy content here</TabPanel>
        <TabPanel value="sell">u sell pi here</TabPanel>
        <TabPanel value="1">u sell pi here</TabPanel>
        <TabPanel value="2">ashawo</TabPanel>
        <TabPanel value="3">here is tab 3 content</TabPanel>
        <TabPanel value="4">tab 4 here</TabPanel>
      </TabContext>
      <Tabs>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "300px",
              margin: "auto",
            }}
          >
            <TabList
              aria-label="tabs example"
              textColor="secondary"
              indicatorColor="secondary"
              onChange={(e) => setValue(e.target.value)}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Buy" value="buy" />
              <Tab label="Sell" value="sell" />
              <Tab label="test" value="1" />
              <Tab label="tab 2" value="2" />
              <Tab label="Tab 3" value="3" />
              <Tab label="Tab 4" value="4" />
            </TabList>
          </Box>

          <TabPanel value="buy">buy content here</TabPanel>
          <TabPanel value="sell">u sell pi here</TabPanel>
          <TabPanel value="1">u sell pi here</TabPanel>
          <TabPanel value="2">ashawo</TabPanel>
          <TabPanel value="3">here is tab 3 content</TabPanel>
          <TabPanel value="4">tab 4 here</TabPanel>
        </TabContext>
      </Tabs>
    </Box>
  );
};
