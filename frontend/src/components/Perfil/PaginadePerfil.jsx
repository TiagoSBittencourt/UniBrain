import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import EditUsername from './EditUsername';
import InfoPerfil from './infoPerfil';
import ButaoPerfil from './ButaoPerfil';
import TextPerfil from './TextPerfil';
import axios from 'axios';
import './PaginadePerfil.css';


function Perfil(){
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
        <div className="containerperfil">
            <div className="boxperfil">
                {post ? (
                <>
                <AvatarPerfil file={post.data.avatar} />
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
                    <ButaoPerfil text="Editar Perfil"/> 
                </Link>
            </div>
        </div>
    )
}

export default Perfil;