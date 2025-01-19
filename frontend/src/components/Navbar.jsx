import React, {useState} from 'react'
import Logo from '../assets/UniBrain_Logo.png'
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "./Navbar.css"

function Navbar(){

    const [openLinks, setOpenLinks] = useState(false)

    // Bugged
    //const toggleNavbar = () => {
    //    setOpenLinks(!openLinks)
    //}

    return (
        <div className='navbar'>
            <div className="leftSide" id={openLinks ? "open" : "close"}>
            <Link to="/"> 
                <img className= 'logoNavBar'draggable="false" src={Logo} />
                <h1 className='nomeSite'>UniBrain</h1>
            </Link>
             <div className='hiddenLinks'>
                <Link to="/homeTrilhas"> Trilhas</Link>
                <Link to="/login"> Login</Link>
                <Link to="/register"> Registrar</Link> 
             </div>
            </div>
            <div className="rightSide">
            <Link to="/homeTrilhas"> Trilhas</Link>
            <Link to="/login" className="botaoLoginNavBar"> Login</Link>
            <Link to="/register" className="botaoRegistrar"> Registrar</Link>
            <button>
            <ReorderIcon />
            </button>
            </div>
        </div>
    )
}

export default Navbar;