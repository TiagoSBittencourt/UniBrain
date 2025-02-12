import { useState } from "react";
import { Link } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import DrawIcon from "@mui/icons-material/Draw";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./EDO.css"; 

export default function EDOs() {
  const [openMenu, setOpenMenu] = useState(false);

  // Alterna a exibição do menu suspenso
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="topicEDO">
      <h1 className="titleEDO">EDO I</h1>

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
            <Link to="/ConceitosEDOPrimeiraO" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre EDOs de primeira ordem
            </Link>
            <Link to="/QuestoesEDOPrimeiraO" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre EDOs de primeira ordem
            </Link>
            <Link to="/ConceitosEDOSegundaO" className="menuItem">
              <ArticleIcon className="dropdown-icon" />
              Conceitos sobre EDOs de segunda ordem
            </Link>
            <Link to="/QuestoesEDOSegundaO" className="menuItem">
              <DrawIcon className="dropdown-icon" />
              Questões sobre EDOs de segunda ordem
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
