import React from 'react';
import Navbar from '../Navbar';
import Navbar2 from '../Navbar2';
import PaginaTrilhas from '../PaginaTrilhas/paginaTrilhas';
import Footer from '../Footer';
import "./homeTrilhas.css";

function HomeTrilhas() {
    const hasToken = localStorage.getItem("token") !== null;

    return (
        <div className="homeTrilhasT">
            <div className="headerContainerT">
                {hasToken ? <Navbar2 /> : <Navbar />}
                <PaginaTrilhas />
                <Footer />
            </div>
        </div>
    );
}

export default HomeTrilhas;