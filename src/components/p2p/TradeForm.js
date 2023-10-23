import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import { Send } from "@mui/icons-material";
import "../../styles/p2p -styles/TradeForm.css";
import SuccessAlert from "./Error";

const TradeForm = () => {
  const [amount, setAmount] = useState("");
  const [action, setAction] = useState("buy"); // Initialize with "buy"
  const [minToBuy, setMinToBuy] = useState("");
  const [minToSell, setMinToSell] = useState("");
  const [price, setPrice] = useState("");

  const [error, setError] = useState(true);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleMinToBuyChange = (event) => {
    setMinToBuy(event.target.value);
  };

  const handleMinToSellChange = (event) => {
    setMinToSell(event.target.value);
  };

  const handleSubmit = () => {
    // Implement trade submission logic here
    if (price && amount && (action === "buy" ? minToBuy : minToSell)) {
      console.log(
        `Amount: ${amount}, Action: ${action}, Min to Buy: ${minToBuy}, Min to Sell: ${minToSell}`
      );
      setAction("buy");
      setPrice("");
      setAmount("");
      setMinToBuy("");
      setMinToSell("");
    }
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="all trade-form">
      <SuccessAlert />
      <h2>Place Your Ad</h2>
      <form>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="trade-action-label">What do you want</InputLabel>
          <Select
            labelId="trade-action-label"
            id="trade-action"
            required
            value={action}
            onChange={handleActionChange}
            label="Action"
            sx={{ marginBottom: 2 }}
          >
            <MenuItem value="buy">Buy</MenuItem>
            <MenuItem value="sell">Sell</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          required
          label={`Amount of Pi you want to ${action}`}
          variant="outlined"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          sx={{ marginBottom: 2 }}
          InputProps={{
            endAdornment: <InputAdornment position="end">Pi</InputAdornment>,
          }}
        />
        <TextField
          fullWidth
          required
          label="Price per Pi"
          variant="outlined"
          type="number"
          value={price}
          onChange={handlePriceChange}
          sx={{ marginBottom: 2 }}
          InputProps={{
            endAdornment: <InputAdornment position="end">USDT</InputAdornment>,
          }}
        />

        {action === "buy" && (
          <FormControl variant="outlined" fullWidth>
            <TextField
              fullWidth
              required
              label="Min Buy"
              variant="outlined"
              type="number"
              value={minToBuy}
              onChange={handleMinToBuyChange}
              sx={{ marginBottom: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Pi</InputAdornment>
                ),
              }}
            />
          </FormControl>
        )}

        {action === "sell" && (
          <FormControl variant="outlined" fullWidth>
            <TextField
              fullWidth
              required
              label="Min Sell"
              variant="outlined"
              type="number"
              value={minToSell}
              onChange={handleMinToSellChange}
              sx={{ marginBottom: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">Pi</InputAdornment>
                ),
              }}
            />
          </FormControl>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          endIcon={<Send />}
        >
          Place Ad
        </Button>
      </form>
    </div>
  );
};

export default TradeForm;
