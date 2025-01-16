import React from 'react';
import "./Header.css"
import Logo from '/assets/UniBrain_Logo.png'

export default function Header() {
    
    return <div className='container'>
         <img  className='imagem' draggable="false" src={Logo} /> 
        <h1 className='title'>Seja Bem-vindo ao <br/> <span className='colorText'>UniBrain</span> </h1>
    </div>
}