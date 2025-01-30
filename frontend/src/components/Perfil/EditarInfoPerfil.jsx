import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import EditUsername from './EditUsername';
import ButaoPerfil from './ButaoPerfil';
import ImageUpload from './ImageUpload';
import CustomizedDialogs from './DialogPerfil';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';
import './PaginadePerfil.css';
import Navbar2 from '../Navbar2';

function EditInfoPerfil() {
    const [file, setFile] = useState(null);  // Estado para armazenar a imagem
    const [post, setPost] = useState(null);  // Estado para armazenar a resposta da API
    const [error, setError] = useState(null); // Estado para armazenar erro (se ocorrer)

    
    const MostrarPerfil = () => {
        const baseURL = "https://reqres.in/api/users/3"; 
        axios.get(baseURL)
            .then((response) => {
                setPost(response.data);  
                setError(null);  
            })
            .catch((error) => {
                console.error('Erro ao fazer a requisição:', error);
                setError("Erro ao carregar os dados do perfil.");  
            });
    };

    useEffect(() => {
        MostrarPerfil();
    }, []);

   
    const handleFileChange = (newFile) => {
        setFile(newFile);  
    };

    const salvarPerfil = () => {
        const formData = new FormData();
        formData.append('first_name', usuarioPerfil); // Envia o nome
        formData.append('email', emailPerfil); // Envia o e-mail
        if (file) {
            formData.append('avatar', file); // Envia a imagem se ela estiver presente
        }

        
        const baseURL = "https://reqres.in/api/users/2";  
        axios.put(baseURL, formData)
            .then((response) => {
                console.log("Perfil atualizado com sucesso", response.data);
                alert('Perfil atualizado com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao salvar o perfil:', error);
                alert('Erro ao salvar o perfil.');
            });
    };

    return (
        <div className="containerperfil">
            <Navbar2 />
            <div className="boxperfil">
                <Link to="/perfil">
                    <button className="botaovoltar" ><ArrowBackIosNewIcon /></button> 
                </Link>

                {file ? (
                    <AvatarPerfil file={file} />
                ) : post ? (
                    <AvatarPerfil file={post.data.avatar} />
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <p>Carregando avatar...</p>
                )}

                <CustomizedDialogs>
                    <ImageUpload setFile={handleFileChange}/>
                </CustomizedDialogs>

                <div className="infoPerfil">
                    <div className="UserPerfil">
                        {post ? (
                            <EditUsername usuarioPerfil={post.data.first_name} />
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            <p>Carregando nome...</p>
                        )}
                    </div>

                    <div className="EmailPerfil">
                        {post ? post.data.email : error ? <p>{error}</p> : <p>Carregando e-mail...</p>}
                    </div>

                    <div className="SenhaPerfil">
                        Senha
                        <br/>
                        <Link className="redefinirperfil" to="/request/password-reset">
                            Redefinir a Senha?
                        </Link>
                        <Link to="/perfil"> 
                            <ButaoPerfil text="Salvar Perfil" onClick={salvarPerfil}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditInfoPerfil;
