import React from 'react'
import Header from './Header'
import "./Home.css"
import Baixo from './baixo'
import CardHome from './Cardhome'
import Navbar from '../Navbar'
import MateriasDiv from './MateriasDiv'
import Footer from '../Footer'





function Home(){
    return (
        <div className="home">
            <div className="headerContainer">
                <Navbar/>
                <Header/>
                <CardHome/>
                <MateriasDiv/>
                <Baixo/>
                <Footer/>
                     
            </div>
        </div>
    )
}

export default Home;