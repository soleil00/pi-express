import React from "react";
import "../../styles/p2p -styles/TradeList.css";
import { Button } from "@mui/material";

function TradeList({ order, onClick }) {
  return (
    <div className="ad">
      <div className="ad-details">
        <p>@{order.username}</p>
        <div className="flex">
          <p>Price</p>
          <p style={{ marginLeft: "auto" }}>1{order.price} USDT</p>
        </div>
        <div className="flex">
          <p>Remaining</p>
          <p style={{ marginLeft: "auto" }}>{order.amount} Pi</p>
        </div>
      </div>
      <div className="ad-action">
        {/* <p>time passed</p> */}
        <Button
          variant="contained"
          color={order.action === "sell" ? "error" : "success"}
          size="small"
          onClick={onClick}
        >
          {order.action}
        </Button>
      </div>
    </div>
  );
}

export default TradeList;
