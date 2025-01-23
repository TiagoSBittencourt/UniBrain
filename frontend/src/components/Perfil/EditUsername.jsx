import { React, useState } from "react";
import './PaginadePerfil.css';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField'; // Importando o TextField do MUI

export default function EditUsername({ usuarioPerfil }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(usuarioPerfil || "");

  
  const handleSave = () => {
   
    setIsEditing(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (isEditing) {
          handleSave();  
        } else {
          setIsEditing(true);  
        }
      }}
    >
      <label>
        {""}
        {isEditing ? (
          <TextField
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            label="Usuário"
            variant="outlined"
            fullWidth
          />
        ) : (
          <b>{userName}</b>
        )}
      </label>

      <button type="submit">
        {isEditing ? "Salvar" : <EditIcon />}
      </button>
    </form>
  );
}
