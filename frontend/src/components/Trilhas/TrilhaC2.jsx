import './TrilhaC2.css';
import Navbar from '../Navbar';
import HeaderTrilhas from './HeaderTrilhas';
import SeriesSequencias from './SeriesSequencias';
import EDOs from './EDO';
import EDOXs from './EDOX';


const C2 = () =>{
    return (
      <div className="geralc2">
        <Navbar />
        <HeaderTrilhas />
        <SeriesSequencias />
        <EDOs />
        <EDOXs />
        <div className="footer"></div>
      </div>
    );
}

export default C2