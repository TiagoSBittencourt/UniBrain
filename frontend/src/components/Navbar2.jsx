import React, {useState} from 'react'
import Logo from '../assets/UniBrain_Logo.png'
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "./Navbar2.css"
 
function Navbar2(){
 
    const [openLinks, setOpenLinks] = useState(false)
 
    // Bugged
    //const toggleNavbar = () => {
    //    setOpenLinks(!openLinks)
    //}
 
    return (
        <div className='navbar2'>
            <div className="leftSide2" id={openLinks ? "open" : "close"}>
            <Link to="/">
                <img className= 'logoNavBar2'draggable="false" src={Logo} />
                <h1 className='nomeSite2'>UniBrain</h1>
            </Link>
            </div>
            <div className="rightSide2">
            <Link to="/homeTrilhas" className="botaoTrilhas2"> Trilhas</Link>
            <Link to="/perfil" className="botaoPerfil"> Perfil </Link>
            </div>
        </div>
    )
}
 
export default Navbar2;