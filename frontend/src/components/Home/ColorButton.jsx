import * as React from 'react';
import {Link} from "react-router-dom"

export default function ColorButtons() {
  return (
     <Link to="/register">
        <button className="botaoComeceAgora">
            Comece agora
        </button> 
     </Link> 
  );
}