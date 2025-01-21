import React from 'react'
import Navbar from '../Navbar'
import PaginaTrilhas from '../PaginaTrilhas/paginaTrilhas'
import Footer from '../Footer'
import "./homeTrilhas.css"

function HomeTrilhas(){
    return (
        <div className="homeTrilhasT">
            <div className="headerContainerT">
                <Navbar/>                               
                <PaginaTrilhas/>
                <Footer/>
                     
            </div>
        </div>
    )
}

export default HomeTrilhas;