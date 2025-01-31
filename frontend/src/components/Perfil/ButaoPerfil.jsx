import * as React from "react";
import Button from "@mui/material/Button";
import "./PaginadePerfil.css";

export default function ButaoPerfil({ text }) {
  return (
    <Button
      className="BotaoPerfil"
      variant="contained"
      sx={{
        position: "absolute", 
        bottom: 50, // Distância da borda inferior
        right: 60, // Distância da borda direita
        
      }}
    >
      {text}
    </Button>
  );
}
