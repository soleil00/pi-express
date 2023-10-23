import React from "react";
import { NavLink } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import CampaignIcon from "@mui/icons-material/Campaign";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HouseIcon from "@mui/icons-material/House";

function P2pTaskbar() {
  return (
    <div className="taskbar-container">
      <div className="taskbar">
        <NavLink to="/" className="taskbar-link">
          <HouseIcon />
          <p>Home</p>
        </NavLink>
        <NavLink to="/p2p" className="taskbar-link">
          <CampaignIcon />
          <p>Ads</p>
        </NavLink>
        <NavLink to="/p2p/create-ad" className="taskbar-link">
          <AddCircleOutlineIcon />
          <p>Place Ad</p>
        </NavLink>
        <NavLink to="/p2p" className="taskbar-link">
          <FactCheckIcon />
          <p>My Ads</p>
        </NavLink>
        <NavLink to="/" className="taskbar-link">
          <AccountBalanceWalletIcon />
          <p>Wallet</p>
        </NavLink>
      </div>
    </div>
  );
}

export default P2pTaskbar;
