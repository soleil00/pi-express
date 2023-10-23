import React, { useState } from "react";
import { Snackbar, Button } from "@mui/material";

const SuccessAlert = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      autoHideDuration={3000} // Adjust the duration as needed
      onClose={handleClose}
    >
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "12px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Success
        <Button
          color="inherit"
          size="small"
          onClick={handleClose}
          style={{ marginLeft: "auto" }}
        >
          Close
        </Button>
      </div>
    </Snackbar>
  );
};

export default SuccessAlert;
