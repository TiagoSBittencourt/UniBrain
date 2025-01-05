import React from 'react'
import "./baixo.css"
import ColorButtons from './ColorButton';

function Baixo(){
    return (
        <div className="baixo">
           <div className="textobaixo">
            aprenda uma matéria com o <span className = "nomebrain">UniBrain</span>
           <ColorButtons className = "button"/>
           </div>
        </div>
    )
}

export default Baixo;