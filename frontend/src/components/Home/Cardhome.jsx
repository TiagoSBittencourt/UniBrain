import React from 'react'
import "./Cardhome.css"
import MediaCard from './meio';
import Thinking from '../../assets/UniBrain_Logo.jpg'
import Logo from '../../assets/UniBrain_Logo.jpg'

function CardHome(){
    return (
        <div className="rootcard">
            <MediaCard info={{image: Thinking, title: 'grátis. divertido. eficaz.', desc: 'Aprender com o Duolingo é divertido, e pesquisas comprovam que funciona mesmo! Com lições rápidas e curtinhas, você ganha pontos e desbloqueia novos níveis enquanto aprende como se comunicar na vida real.'}}/>
            <MediaCard info={{image: Logo, title: 'baseado na ciência', desc: 'Combinamos metodologias aprovadas pela ciência com um conteúdo encantador para criar cursos eficazes que ensinam leitura, escrita, escuta e fala!'}}/>
            <MediaCard info={{image: Thinking}}/>
            <MediaCard info={{image: Thinking}}/>
        </div>
    )
}

export default CardHome;