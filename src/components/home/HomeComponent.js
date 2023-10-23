import React from "react";
import Balance from "../balance/Balance";
import Actions from "../actions/Actions";
import HomeTaskbar from "../../taskbar/HomeTaskbar";
import { Route, Routes } from "react-router-dom";

function HomeRoute() {
  return (
    <div>
      <Balance />
      <Actions />
    </div>
  );
}

function HomeComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
      </Routes>
      <HomeTaskbar />
    </div>
  );
}

export default HomeComponent;
