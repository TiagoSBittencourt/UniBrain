import React from 'react'
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import EditUsername from './EditUsername';
import InfoPerfil from './infoPerfil';
import ButaoPerfil from './ButaoPerfil';
import TextPerfil from './TextPerfil';
import './PaginadePerfil.css';


function Perfil(){
    return (
        <div className="containerperfil">
            <div className="boxperfil">
                <AvatarPerfil/>
                <InfoPerfil/>
                <Link to="/editar-perfil"> 
                <ButaoPerfil text="Editar Perfil"/> 
                </Link>
                
            </div>
        </div>
    )
}

export default Perfil;