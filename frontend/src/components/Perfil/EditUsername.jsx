import { React, useState } from "react";
import './PaginadePerfil.css';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField'; // Importando o TextField do MUI

export default function EditUsername() {
  const [isEditing, setIsEditing] = useState(false);
  const [usuarioPerfil, setUsuarioPerfil] = useState("Lucas");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
      }}
    >
      <label>
        {""}
        {isEditing ? (
          <TextField
            value={usuarioPerfil}
            onChange={(e) => {
              setUsuarioPerfil(e.target.value);
            }}
            label="Usuário"
            variant="outlined"
            fullWidth
          />
        ) : (
          <b>{usuarioPerfil}</b>
        )}
      </label>
      
      <button type="submit">
        {isEditing ? "Salvar" : <EditIcon />}
      </button>
    </form>
  );
}
