import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

export default function CustomAlert(props) {
  const {
    severity = "success",
    message = "Sucesso",
    actionLabel,
    onClose,
    mt = 0,
    mb = 0,
  } = props;

  const uniqueId = uuidv4();

  return (
    <Alert
      position="absolute"
      id={uniqueId}
      severity={severity}
      onClose={onClose}
      action={
        actionLabel ? (
          <Button color="inherit" size="small" onClick={onClose}>
            {actionLabel}
          </Button>
        ) : null
      }
      sx={{
        mt,
        mb,
        position: "fixed", 
        bottom: 20, 
        right: 20, 
        zIndex: 1300, 
      }}
    >
      {message}
    </Alert>
  );
}