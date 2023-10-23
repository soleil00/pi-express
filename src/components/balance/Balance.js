import React, { useState } from "react";
import "./balance.css";
import { Button } from "@mui/material";

function Balance() {
  const [user, setUser] = useState("Believer");
  return (
    <div className="all balance-container">
      {user ? (
        <h3>welcome, {user}</h3>
      ) : (
        <Button variant="contained">Sign-In</Button>
      )}

      <div className="balances">
        <div className="pi-balance">
          <p>Pi Balance</p>
          <h5>24,525 Pi</h5>
        </div>

        <div className="rwf-balance">
          <p>RWF Balance</p>
          <h5>4,524,500.00 RWF</h5>
        </div>
      </div>
    </div>
  );
}

export default Balance;
