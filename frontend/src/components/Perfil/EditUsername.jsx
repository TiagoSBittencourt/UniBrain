import { React, useState } from "react";
import './PaginadePerfil.css';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField'; // Importando o TextField do MUI

export default function EditUsername({ usuarioPerfil }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(usuarioPerfil || "");
  const [errorusername, setErrorusername] = useState(""); // Estado para armazenar a mensagem de erro

  const handleSave = () => {
    if (userName.length < 3) {
      setErrorusername("O nome de usuário deve ter pelo menos 3 caracteres."); // Mensagem de erro
      return; // Impede a salvagem se o campo for inválido
    }

    setErrorusername(""); 
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
        {isEditing ? (
          <>
            <TextField 
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                if (e.target.value.length < 3) {
                  setErrorusername("O nome de usuário deve ter pelo menos 3 caracteres.");
                } else {
                  setErrorusername(""); // Limpa o erro se o campo for válido
                }
              }}
              label="Usuário"
              variant="outlined"
              fullWidth
              error={!!errorusername} // Ativa o estado de erro do TextField
              helperText={errorusername} // Exibe a mensagem de erro
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ffffff", // Cor da borda
                  },
                  "&:hover fieldset": {
                    borderColor: "#c5c5c5", // Cor da borda ao passar o mouse
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#c6c6c6", // Cor da borda quando focado
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#ffffff", // Cor do label
                },
                "& .MuiOutlinedInput-input": {
                  color: "#ffffff", // Cor do texto
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#c6c6c6", // Cor do label quando focado
                },
              }}
            />
          </>
        ) : (
          <b>{userName}</b>
        )}
      </label>

      <button className="botaoeditarnome" type="submit">
        {isEditing ? "Salvar" : <EditIcon />}
      </button>
    </form>
  );
}