import React, {useState} from 'react'
import Logo from '../assets/UniBrain_Logo.png'
import {Link, useNavigate} from "react-router-dom"
import "./Navbar3.css"
 
function Navbar3() {
    const [openLinks, setOpenLinks] = useState(false);
    const navigate = useNavigate(); // Hook para redirecionamento

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove o token do localStorage
        navigate("/login"); // Redireciona para a página de login
    };

    return (
        <div className="navbar3">
            <div className="leftSide3" id={openLinks ? "open" : "close"}>
                <Link to="/">
                    <img className="logoNavBar3" draggable="false" src={Logo} alt="Logo" />
                    <h1 className="nomeSite3">UniBrain</h1>
                </Link>
            </div>
            <div className="rightSide3">
                <Link to="/homeTrilhas" className="botaoTrilhas3">Trilhas</Link>
                <button onClick={handleLogout} className='botaoPerfil'>Logout</button>
            </div>
        </div>
    );
}
 
export default Navbar3;