import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./FundamentosProbabilidade.css";

export default function FundamentosProbabilidade() {
  const [openMenu, setOpenMenu] = useState(false);

  // Alterna a exibição do menu suspenso
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="topicSS">
      <h1 className="titleSS">Fundamentos de probabilidade</h1>

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
            <Link to="/ConceitosMedia" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre média, mediana e moda
            </Link>
            <Link to="/QuestoesMedia" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre média, mediana e moda
            </Link>
            <Link to="/ConceitosVariavel" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre variáveis aleatórias
            </Link>
            <Link to="/QuestoesVariavel" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre variáveis aleatórias
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
