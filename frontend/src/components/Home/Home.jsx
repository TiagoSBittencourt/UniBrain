import React from 'react'
import Header from './Header'
import "./Home.css"
import Baixo from './baixo'
import CardHome from './Cardhome'
import MateriasDiv from './MateriasDiv'
import Footer from '../Footer'




import Navbar from "../Navbar";
import Navbar2 from "../Navbar2";

function Home() {
    const hasToken = localStorage.getItem("token") !== null;
    
    return (
        <div className="home">
            <div className="headerContainer">
                {hasToken ? <Navbar2 /> : <Navbar />}
                <Header />
                <CardHome />
                <MateriasDiv />
                <Baixo />
                <Footer />
            </div>
        </div>
    );
}

export default Home;