import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./EDOX.css"; 

export default function EDOXs() {
  const [openMenu, setOpenMenu] = useState(false);

  // Alterna a exibição do menu suspenso
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="topicEDO">
      <h1 className="titleEDO">EDO II</h1>

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
            <Link to="/ConceitosSeriesPotencia" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre a resolução por série de potência
            </Link>
            <Link to="/QuestoesSeriesPotencia" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre ta resolução por série de potência
            </Link>
            <Link to="/ConceitosLaplace" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre transformada de Laplace
            </Link>
            <Link to="/QuestoesLaplace" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre transformada de Laplace
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
