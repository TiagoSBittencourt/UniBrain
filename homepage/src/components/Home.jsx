import React from 'react'
import Header from './header'
import "./Home.css"
import Baixo from './baixo'
import CardHome from './Cardhome'


function Home(){
    return (
        <div className="home">
            <div className="headerContainer">
                <Header/>
                <CardHome/>
                <Baixo/>
            </div>
        </div>
    )
}

export default Home;