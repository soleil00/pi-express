import React from "react";
import Balance from "../components/balance/Balance";
import Actions from "../components/actions/Actions";
import Transaction from "../components/transactions/Transaction";
import HomeTaskbar from "../taskbar/HomeTaskbar";

function Home() {
  return (
    <div>
      <Balance />
      <Actions />
      <HomeTaskbar />
    </div>
  );
}

export default Home;
