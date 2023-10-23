import React from "react";
import "./actions.css";
import { Button, Grid, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/CallReceived";
import ReceiveIcon from "@mui/icons-material/CallEndSharp";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SellIcon from "@mui/icons-material/Sell";
import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharp";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function Actions() {
  return (
    <div className="all action-container">
      {/* <Button
        variant="contained"
        color="secondary"
        size="small"
        startIcon={<SendIcon />}
      >
        SELL
      </Button> */}
      <Button size="small">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <CurrencyExchangeIcon />
          </Grid>
          <Grid item> BUY</Grid>
        </Grid>
      </Button>

      <Button size="small">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <SellIcon />
          </Grid>
          <Grid item>SELL</Grid>
        </Grid>
      </Button>
      <Button size="small">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <SendIcon />
          </Grid>
          <Grid item>DEPOSIT</Grid>
        </Grid>
      </Button>
      <Button size="small">
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <ArrowOutwardSharpIcon />
          </Grid>
          <Grid item>WITHDRAW</Grid>
        </Grid>
      </Button>
    </div>
  );
}

export default Actions;
