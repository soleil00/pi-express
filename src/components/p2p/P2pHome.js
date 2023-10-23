import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, InputLabel } from "@mui/material";
import TradeList from "./TradeList";
import "../../styles/p2p -styles/p2pHome.css";
import { orders } from "../../data"; // Make sure to import your orders data
import P2pTaskbar from "./P2pTaskbar";
import TradeDetails from "./TradeDetails";

function P2pHome() {
  const [activeButton, setActiveButton] = useState("buy");
  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Filter orders to "Buy" initially when the component mounts
    const buyOrders = orders.filter((order) => order.action === "buy");
    setFiltered(buyOrders);
  }, []);

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    const filteredOrders = orders.filter(
      (order) => order.action === buttonType
    );
    setFiltered(filteredOrders);
  };

  const toggleShow = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="all trade-form p2pHome">
      {show ? (
        <div>
          <h1 style={{ textAlign: "center" }}>P2P Trading</h1>
          <ButtonGroup fullWidth>
            <Button
              variant={activeButton === "buy" ? "contained" : "outlined"}
              color="success"
              size="large"
              onClick={() => handleButtonClick("buy")}
            >
              Buy
            </Button>
            <Button
              variant={activeButton === "sell" ? "contained" : "outlined"}
              color="error"
              size="large"
              onClick={() => handleButtonClick("sell")}
            >
              Sell
            </Button>
          </ButtonGroup>
          <div>
            <InputLabel sx={{ marginTop: 2, marginBottom: 2 }}>
              Search Filter
            </InputLabel>
          </div>
          <div className="ads-container">
            {filtered.map((order) => {
              return (
                <TradeList key={order.id} order={order} onClick={toggleShow} />
              );
            })}
          </div>
        </div>
      ) : (
        <TradeDetails />
      )}

      <P2pTaskbar />
    </div>
  );
}

export default P2pHome;
