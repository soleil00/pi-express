import React from "react";
import "./trans.css";
// import ArrowOutwardSharpIcon from "@mui/icons-material/ArrowOutwardSharpIcon";

function Trans({ type, currency, amount, status }) {
  return (
    <div className="transaction">
      <div className="type">{/* <ArrowOutwardSharpIcon /> */}</div>
      <div className="transaction-detail"></div>
      <div className="transaction-amount"></div>
    </div>
  );
}

export default Trans;
