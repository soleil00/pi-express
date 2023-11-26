import {
  DesktopAccessDisabledTwoTone,
  InsertCommentOutlined,
  Send,
} from "@mui/icons-material";
import { Box, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

export const MuiToggleButton = () => {
  const [soleil, setSoleil] = useState(["d"]);
  const handleSoleil = (e) => {
    setSoleil(e.target.value);
  };
  return (
    <Box>
      <Paper>
        {soleil.map((s) => (
          <h2 key={s}>{s}</h2>
        ))}
      </Paper>
      <ToggleButtonGroup
        value={soleil}
        onChange={(e) => setSoleil((state) => [...state, e.target.value])}
      >
        <ToggleButton value="send">
          <Send />
        </ToggleButton>
        <ToggleButton value="receive">
          <InsertCommentOutlined />
        </ToggleButton>
        <ToggleButton value="deposit">
          <DesktopAccessDisabledTwoTone />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
