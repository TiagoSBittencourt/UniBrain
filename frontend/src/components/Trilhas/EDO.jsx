import "./SeriesSequencias.css";
import { useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Importando o ícone de seta para baixo
import { Menu, MenuItem, IconButton } from "@mui/material";

export default function EDOs() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget); // Abre o menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Fecha o menu
  };

  const handleSelectTopic = (value) => {
    setSelectedTopic(value);
    window.location.href = value; // Redireciona para a URL
    setAnchorEl(null); // Fecha o menu após a seleção
  };

  return (
    <div className="topic">
      <h1 className="titleS">EDOs</h1>

      <div className="dropdown">
        <label htmlFor="topics" className="dropdown-label">
          Escolha um tópico:
        </label>

        {/* Botão para abrir o menu */}
        <IconButton onClick={handleClick} className="dropdown-button">
          <ArrowDropDownIcon className="dropdown-icon" />{" "}
          {/* Ícone de seta para baixo */}
        </IconButton>

        {/* Menu suspenso customizado */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom", // Alinha o menu na parte inferior do botão
            horizontal: "center", // Alinha o menu ao centro do botão
          }}
          transformOrigin={{
            vertical: "top", // Faz o menu se alinhar com a parte superior
            horizontal: "center", // Faz o menu se alinhar com o centro
          }}
        >
          <MenuItem onClick={() => handleSelectTopic("/conceitos-EDOs1")}>
            <ArticleIcon className="dropdown-icon" />
            Conceitos sobre EDOs de primeira ordem
          </MenuItem>
          <MenuItem onClick={() => handleSelectTopic("/questoes-EDOs1")}>
            <DrawIcon className="dropdown-icon" />
            Questões sobre EDOs de primeira ordem
          </MenuItem>
          <MenuItem onClick={() => handleSelectTopic("/conceitos-EDOs2")}>
            <ArticleIcon className="dropdown-icon" />
            Conceitos sobre EDOs de segunda ordem
          </MenuItem>
          <MenuItem onClick={() => handleSelectTopic("/questoes-EDOs2")}>
            <DrawIcon className="dropdown-icon" />
            Questões sobre EDOs de segunda ordem
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
