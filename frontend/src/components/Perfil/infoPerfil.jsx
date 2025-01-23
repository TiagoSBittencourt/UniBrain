import React from 'react'
import AvatarPerfil from './Avatar';
import './PaginadePerfil.css';

function InfoPerfil({userperfil, emailperfil, senhaperfil}){
    return (
        <div className="infoPerfil">
            <div className="UserPerfil">
                {userperfil}
            </div>
            <div className="EmailPerfil">
                {emailperfil}   
            </div>
            <div className="SenhaPerfil">
                {senhaperfil}
            </div>
        </div>
    )
}

export default InfoPerfil;