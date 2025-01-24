import React from 'react';
import "./Header.css"
import {Link} from "react-router-dom"

export default function Header() {
    
    return <div className='container'>
        <h1 className='title'> Estudar ficou mais simples usando <br/> <span className='colorText'>UniBrain</span> </h1>
        <p className='paragrafo-introducao'>Estude as suas matérias da faculdade de maneira gameficada e divertida. <span className='paragrafoGratis'>É grátis</span></p>
        <Link to="/register">
        <button className="botaoComeceAgora">
            Comece agora
        </button> 
     </Link> 
    </div>
    
}
 