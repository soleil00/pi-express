import { Send } from "@mui/icons-material";
import { Alert, AlertTitle, Box, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef((props, ref) => {
  return <Alert elevation={5} ref={ref} {...props} />;
});

const MuiSnackBar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        size="small"
        endIcon={<Send />}
      >
        submit
      </Button>
      {/* <Snackbar
        message="u have opened soleil snacbar"
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      /> */}

      <Snackbar
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <SnackbarAlert
          severity="success"
          //   action={<Button>lie</Button>}
          onClose={handleClose}
        >
          <AlertTitle>some title</AlertTitle>
          succesfult created custom snackbar
        </SnackbarAlert>
      </Snackbar>
    </Box>
  );
};

export default MuiSnackBar;
