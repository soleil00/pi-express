import React from "react";
import { Outlet } from "react-router-dom";
import P2pTaskbar from "./P2pTaskbar";
import TradeForm from "./TradeForm";

function P2P() {
  return (
    <div>
      <TradeForm />
      <P2pTaskbar />
    </div>
  );
}

export default P2P;
