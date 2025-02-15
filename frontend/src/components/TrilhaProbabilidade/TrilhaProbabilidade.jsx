import "./TrilhaProbabilidade.css";
import Navbar2 from "../Navbar2";
import HeaderTrilhasProbabilidade from "./HeaderTrilhaProbabilidade";
import FundamentosProbabilidade from "./FundamentosProbabilidade";
import EstatisticaDescritiva from "./EstatisticaDescritiva";
import Tecnicas from "./Tecnicas";

const PE = () => {
  return (
    <div className="geralPE2">
      <Navbar2 />
      <HeaderTrilhasProbabilidade />
      <FundamentosProbabilidade />
      <EstatisticaDescritiva />
      <Tecnicas />
    
      <div className="footer"></div>
    </div>
  );
};

export default PE;
