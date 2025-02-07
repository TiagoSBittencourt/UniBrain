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
        axios.get(baseURL, header)
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
        <div className="containerperfil">
            <Navbar2 />
            <div className="boxperfil">
                {post ? (
                    <>
                        <AvatarPerfil className="avatarpaginaperfil" file={post.data.avatar} />
                        <InfoPerfil
                            userperfil={post.data.first_name}  // Exibindo o nome do usuário
                            emailperfil={post.data.email}      // Exibindo o e-mail do usuário
                            senhaperfil="Senha"                
                        />
                    </>
                ) : (
                    <p>error</p> 
                )}
                <Link to="/editar-perfil"> 
                    <ButaoPerfil text="Editar Perfil" /> 
                </Link>
            </div>
        </div>
    );
}

export default Perfil;