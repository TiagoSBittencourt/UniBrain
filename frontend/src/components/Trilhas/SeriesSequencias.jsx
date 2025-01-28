import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./SeriesSequencias.css"; 

export default function SeriesSequencias() {
  const [openMenu, setOpenMenu] = useState(false);

  // Alterna a exibição do menu suspenso
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="topicSS">
      <h1 className="titleSS">Séries e Sequências</h1>

      <div className="dropdownSS">
        <label htmlFor="topicsSS" className="dropdown-labelSS">
          Escolha um tópico:
        </label>

        {/* Botão de menu */}
        <button onClick={toggleMenu} className="dropdown-buttonSS">
          <ArrowDropDownIcon className="dropdown-icon" />
        </button>

        {/* Menu suspenso */}
        {openMenu && (
          <div className="menuDropdown">
            <Link to="/ConceitosSequencias" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre Sequências
            </Link>
            <Link to="/QuestoesSequencias" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre Sequências
            </Link>
            <Link to="/conceitos-series" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre Séries
            </Link>
            <Link to="/questoes-series" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre Séries
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
