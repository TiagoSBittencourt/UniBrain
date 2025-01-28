import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./EDOX.css"; 

export default function SeriesSequencias() {
  const [openMenu, setOpenMenu] = useState(false);

  // Alterna a exibição do menu suspenso
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="topicEDO">
      <h1 className="titleEDO">EDOXs</h1>

      <div className="dropdownEDO">
        <label htmlFor="topicsEDO" className="dropdown-labelEDO">
          Escolha um tópico:
        </label>

        {/* Botão de menu */}
        <button onClick={toggleMenu} className="dropdown-buttonEDO">
          <ArrowDropDownIcon className="dropdown-icon" />
        </button>

        {/* Menu suspenso */}
        {openMenu && (
          <div className="menuDropdown">
            <Link to="/conceitosSequencias" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre EDOXs de primeira ordem
            </Link>
            <Link to="/questoes-sequencias" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre EDOXs de primeira ordem
            </Link>
            <Link to="/conceitos-series" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre EDOXs de segunda ordem
            </Link>
            <Link to="/questoes-series" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre EDOXs de segunda ordem
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
