import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import InfoPerfil from './infoPerfil';
import ButaoPerfil from './ButaoPerfil';
import axios from 'axios';
import './PaginadePerfil.css';
import Navbar2 from '../Navbar2';

function Perfil() {
    const [file, setFile] = useState(null);  // Estado para armazenar a imagem
    const [post, setPost] = useState(null);  // Estado para armazenar a resposta da API

    // Função para fazer a requisição
    const MostrarPerfil = () => {
        const baseURL = "https://reqres.in/api/users/3"; 
        axios.get(baseURL)
            .then((response) => {
                setPost(response.data); 
            })
            .catch((error) => {
                console.error('Erro ao fazer a requisição:', error);
            });
    };

    useEffect(() => {
        MostrarPerfil();
    }, []);

    return (
        <div>
        <Navbar2 className="navbar2"/>
        <div className="containerperfil">
            <div className="boxperfil">
                {post ? (
                    <div className="perfil-content">
                        <AvatarPerfil className="avatarPaginaPerfil" file={post.data.avatar} />
                        <div className="info-container">
                            <InfoPerfil
                                userperfil={<><strong>Usuário:</strong> {post.data.first_name}</>}  
                                emailperfil={<><strong>Email:</strong> {post.data.email}</>}      
                                senhaperfil={<><strong>Senha:</strong> ******</>}               
                            />
                        </div>
                    </div>
                ) : (
                    <p>error</p> 
                )}
                <Link to="/editar-perfil"> 
                    <ButaoPerfil className="BotaoPerfil" text="Editar Perfil" /> 
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Perfil;
