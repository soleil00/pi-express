import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const MuiDialog = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
      >
        open modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>confirm deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            u are about to delete this element from dom do u confirm
          </DialogContentText>
          <form>
            <TextField
              fullWidth
              size="small"
              label="sell"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">$PI</InputAdornment>
                ),
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
