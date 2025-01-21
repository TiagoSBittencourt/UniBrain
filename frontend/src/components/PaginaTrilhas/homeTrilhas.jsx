import React from 'react'
import Navbar from '../Navbar'
import paginaTrilhas from '../PaginaTrilhas/paginaTrilhas'
import Footer from '../Footer'
import "./homeTrilhas.css"

function homeTrilhas(){
    return (
        <div className="homeTrilhasT">
            <div className="headerContainerT">
                <Navbar/>                               
                <paginaTrilhas/>
                <Footer/>
                     
            </div>
        </div>
    )
}

export default homeTrilhas;