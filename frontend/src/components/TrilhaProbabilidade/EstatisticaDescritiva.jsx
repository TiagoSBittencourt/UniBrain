import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./EstatisticaDescritiva.css";

export default function EstatisticaDescritiva() {
  const [openMenu, setOpenMenu] = useState(false);

  // Alterna a exibição do menu suspenso
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="topicEDO">
      <h1 className="titleEDO">
        Estatística Descritiva e Inferência Estatística
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
            <Link to="/ConceitosDistribuicao" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre Distribuições Amostrais
            </Link>
            <Link to="/QuestoesDistribuicao" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre Distribuições Amostrais
            </Link>
            <Link to="/ConceitosRegressao" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre Regressão Linear e Correlação
            </Link>
            <Link to="/QuestoesRegressao" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre Regressão Linear e Correlação
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
