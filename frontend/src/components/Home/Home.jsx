import React from 'react'
import Header from './Header'
import "./Home.css"
import Baixo from './baixo'
import CardHome from './Cardhome'
import Navbar from '../Navbar'
import MateriasDiv from './MateriasDiv'





function Home(){
    return (
        <div className="home">
            <div className="headerContainer">
                <Navbar/>
                <Header/>
                <CardHome/>
                <MateriasDiv/>
                <Baixo/>
            
            </div>
        </div>
    )
}

export default Home;