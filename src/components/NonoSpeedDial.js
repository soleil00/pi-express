import { Add, Edit, Info } from "@mui/icons-material";
import { Fab, IconButton, Tooltip } from "@mui/material";
import React from "react";

function NonoSpeedDial() {
  return (
    <Tooltip title="This is a cool tooltip!" arrow placement="bottom-end">
      <IconButton>
        <Info />
      </IconButton>
    </Tooltip>
  );
}

export default NonoSpeedDial;
