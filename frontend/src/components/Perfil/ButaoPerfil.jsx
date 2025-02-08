import * as React from "react";
import Button from "@mui/material/Button";
import "./PaginadePerfil.css";

export default function ButaoPerfil({ text, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="BotaoPerfil"
      variant="contained"
      sx={{
        position: "absolute", 
        bottom: 50, // Distância da borda inferior
        right: 60, // Distância da borda direita
        fontFamily: "'FiraSansBold', sans-serif",
        
      }}
    >
      {text}
    </Button>
  );
}
