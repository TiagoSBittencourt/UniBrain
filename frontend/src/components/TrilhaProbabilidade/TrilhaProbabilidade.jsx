import "./TrilhaProbabilidade.css";
import Navbar from "../Navbar";
import HeaderTrilhasProbabilidade from "./HeaderTrilhaProbabilidade";
import FundamentosProbabilidade from "./FundamentosProbabilidade";
import EstatisticaDescritiva from "./EstatisticaDescritiva";
import Tecnicas from "./Tecnicas";

const PE = () => {
  return (
    <div className="geralPE2">
      <Navbar />
      <HeaderTrilhasProbabilidade />
      <FundamentosProbabilidade />
      <EstatisticaDescritiva />
      <Tecnicas />
    
      <div className="footer"></div>
    </div>
  );
};

export default PE;
