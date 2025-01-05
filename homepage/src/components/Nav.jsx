import React, {useState} from 'react'
import Logo from '../assets/UniBrain_Logo.png'
import {Link} from "react-router-dom"
import ReorderIcon from '@mui/icons-material/Reorder';
import "./Nav.css"

function Navbar(){

    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className='navbar'>
            <div className="leftSide" id={openLinks ? "open" : "close"}>
            <Link to="/"> 
                <img draggable="false" src={Logo} />
            </Link>
             <div className='hiddenLinks'>
                <Link to="/"> Home</Link>
                <Link to="/menu"> Menu</Link>
                <Link to="/login"> Fazer Login</Link>
                <Link to="/register"> Registrar</Link> 
             </div>
            </div>
            <div className="rightSide">
            <Link to="/"> Home</Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/login"> Fazer Login</Link>
            <Link to="/register"> Registrar</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon />
            </button>
            </div>
        </div>
    )
}

export default Navbar;