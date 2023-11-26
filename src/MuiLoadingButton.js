import { LocalDining, Send } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  AlertTitle,
  Box,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomAlert = forwardRef((props, ref) => {
  return <Alert ref={ref} {...props} elevation={5} />;
});

export const MuiLoadingButton = () => {
  const [sol, setSol] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <Box>
      <LoadingButton
        variant="contained"
        loading={sol}
        loadingPosition="start"
        startIcon={<Send />}
        onClick={() => setSol(true)}
      >
        dan
      </LoadingButton>
      <LoadingButton
        variant="contained"
        loadingPosition="start"
        startIcon={<Send />}
      >
        {sol ? "data sent to db" : "send dat to db"}
      </LoadingButton>

      <Snackbar
        open={sol}
        onClose={() => setSol(false)}
        autoHideDuration={4000}
        severity="error"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <CustomAlert severity="warning" onClose={() => setSol(false)}>
          soleil title
        </CustomAlert>
      </Snackbar>
    </Box>
  );
};
