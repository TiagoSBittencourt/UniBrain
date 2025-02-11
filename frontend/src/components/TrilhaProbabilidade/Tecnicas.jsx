import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Tecnicas.css";

export default function Tecnicas() {
  const [openMenu, setOpenMenu] = useState(false);

  // Alterna a exibição do menu suspenso
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="topicEDO">
      <h1 className="titleEDO">
        Técnicas Avançadas em Probabilidade e Estatística
      </h1>

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
            <Link to="/ConceitosEstocasticos" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre Processos Estocásticos
            </Link>
            <Link to="/QuestoesEstocasticos" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre Processos Estocásticos
            </Link>
            <Link to="/ConceitosEstimativa" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre Métodos de Estimação Avançada
            </Link>
            <Link to="/QuestoesEstimativa" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre Métodos de Estimação Avançada
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
