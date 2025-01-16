import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import EditUsername from './EditUsername';
import InfoPerfil from './infoPerfil';
import ButaoPerfil from './ButaoPerfil';
import ImageUpload from './ImageUpload';
import TextPerfil from './TextPerfil';
import CustomizedDialogs from './DialogPerfil';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './PaginadePerfil.css';


function EditInfoPerfil(){
    const[file, setFile] = useState(null)
    return (
        <div className="containerperfil">
            <div className="boxperfil">
                <AvatarPerfil file={file}/>
                
                <Link to="/perfil"> 
                <button><ArrowBackIosNewIcon/></button>
                </Link>
                <ButaoPerfil text="Salvar Perfil"/>
                <CustomizedDialogs><ImageUpload setFile={setFile}/></CustomizedDialogs>
                <div className="infoPerfil">
                    <div className="UserPerfil">
                        <EditUsername/> 
                    </div>
                    <div className="EmailPerfil">
                        Email    
                    </div>
                    <div className="SenhaPerfil">
                        Senha
                        <Link to="/request/password-reset">
                            Redefinir a Senha?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditInfoPerfil;