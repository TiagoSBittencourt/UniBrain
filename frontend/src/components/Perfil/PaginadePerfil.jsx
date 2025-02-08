import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import InfoPerfil from './infoPerfil';
import ButaoPerfil from './ButaoPerfil';
import axios from 'axios';
import './PaginadePerfil.css';
import Navbar2 from '../Navbar2';
import axiosInstance2 from './axiosInstance2';

function Perfil() {
    const [post, setPost] = useState(null);  // Estado para armazenar a resposta da API
    const [loading, setLoading] = useState(true);  // Estado para controlar o carregamento

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance2.get('/profile/update/');
                if (response.status === 200) {
                    setPost(response.data);
                }
            } catch (error) {
                console.error("Erro ao buscar dados do perfil:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

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
                        <p>Erro ao carregar o perfil.</p> 
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
