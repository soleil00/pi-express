import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./taskbar.css";
import HouseIcon from "@mui/icons-material/House";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function HomeTaskbar() {
  return (
    <div className="taskbar-container">
      <div className="taskbar">
        <NavLink to="/" className="taskbar-link">
          <HouseIcon />
          <p>Home</p>
        </NavLink>
        <NavLink to="/" className="taskbar-link">
          <AutoGraphIcon />
          <p>Trade</p>
        </NavLink>
        <NavLink to="/p2p" className="taskbar-link">
          <PeopleOutlineIcon />
          <p>P2P</p>
        </NavLink>
        <NavLink to="/" className="taskbar-link">
          <AccountBalanceWalletIcon />
          <p>Wallet</p>
        </NavLink>
        <NavLink to="/" className="taskbar-link">
          <AccountBoxIcon />
          <p>Profile</p>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeTaskbar;
