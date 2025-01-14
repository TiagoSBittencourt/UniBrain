import './TrilhaC2.css';
import HeaderTrilhas from './HeaderTrilhas';
import Navbar from "../Navbar";
import SeriesSequencias from './SeriesSequencias';
import EDOs from './EDO';
import EDOXs from './EDOX';


const C2 = () =>{
    return (
      <div className="geral">
        <Navbar />
        <HeaderTrilhas />
        <SeriesSequencias />
        <EDOs />
        <EDOXs />   
      </div>
    );
}

export default C2