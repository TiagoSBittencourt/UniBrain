import React from 'react'
import AvatarPerfil from './Avatar';
import './PaginadePerfil.css';

function InfoPerfil(){
    return (
        <div className="infoPerfil">
            <div className="UserPerfil">
                User  
            </div>
            <div className="EmailPerfil">
                Email    
            </div>
            <div className="SenhaPerfil">
                Senha
            </div>
        </div>
    )
}

export default InfoPerfil;