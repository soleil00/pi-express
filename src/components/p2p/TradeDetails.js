import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  TextField,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

function TradeDetails() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // You can also handle form validation and other actions
  };

  return (
    <div className="trade-details">
      {/* <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Trade Details
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ width: "100%" }} // Set width to 100% for full width
      >
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Typography>@seller-username</Typography>
            <FormControl fullWidth>
              <TextField
                required
                label="Amount of Pi you want to buy"
                variant="outlined"
                type="number"
                color="primary"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">Pi</InputAdornment>
                  ),
                }}
                sx={{ marginBottom: 2, marginTop: 2 }}
              />
            </FormControl>
            <FormControl>
              <TextField
                required
                label="Amount of USDT you'll pay"
                variant="outlined"
                color="primary"
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">USDT</InputAdornment>
                  ),
                }}
                sx={{ marginBottom: 2 }}
              />
            </FormControl>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="success"
              endIcon={<MoneyOffIcon />}
            >
              Sell with 0 Fee
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default TradeDetails;
