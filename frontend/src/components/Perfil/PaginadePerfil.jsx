import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import InfoPerfil from './infoPerfil';
import ButaoPerfil from './ButaoPerfil';
import axiosInstance2 from './axiosInstance2';
import Navbar2 from '../Navbar2';
import './PaginadePerfil.css';

const baseURL = 'http://127.0.0.1:8000/';

function Perfil() {
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance2.get('/profile/get/');
                console.log("Dados do perfil recebidos:", response.data)
                if (response.status === 200) {
                    setPerfil(response.data);
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

    if (!perfil) {
        return <p>Erro ao carregar o perfil.</p>;
    }

    return (
        <div>
            <Navbar2 className="navbar2" />
            <div className="containerperfil">
                <div className="boxperfil">
                    <div className="perfil-content">
                        {/* Avatar */}
                        <AvatarPerfil 
                            className="avatarPaginaPerfil" 
                            file={perfil.profile.image ? `${baseURL}${perfil.profile.image}` : null} 
                        />

                        {/* Informações do Usuário */}
                        <div className="info-container">
                            <InfoPerfil
                                userperfil={<><strong>Usuário:</strong> {perfil.user.username}</>}
                                emailperfil={<><strong>Email:</strong> {perfil.user.email}</>}
                                senhaperfil={<><strong>Senha:</strong> ******</>}
                            />
                        </div>
                    </div>
                    
                    {/* Botão Editar Perfil */}
                    <Link to="/editar-perfil">
                        <ButaoPerfil className="BotaoPerfil" text="Editar Perfil" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Perfil;
