import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AvatarPerfil from './Avatar';
import EditUsername from './EditUsername';
import ButaoPerfil from './ButaoPerfil';
import ImageUpload from './ImageUpload';
import CustomizedDialogs from './DialogPerfil';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axiosInstance2 from './axiosInstance2';
import './PaginadePerfil.css';
import Navbar2 from '../Navbar2';

function EditInfoPerfil() {
    const [file, setFile] = useState(null);
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [usuarioPerfil, setUsuarioPerfil] = useState('');
    const [emailPerfil, setEmailPerfil] = useState('');

    useEffect(() => {
        const MostrarPerfil = () => {
            axiosInstance2.get('/profile/get/')
                .then((response) => {
                    setPost(response.data);
                    setUsuarioPerfil(response.data.user.username);
                    setEmailPerfil(response.data.user.email);
                    setError(null);
                })
                .catch((error) => {
                    console.error('Erro ao carregar os dados do perfil:', error);
                    setError("Erro ao carregar os dados do perfil.");
                });
        };
        MostrarPerfil();
    }, []);

    const handleFileChange = (newFile) => {
        setFile(newFile);
    };

    const salvarPerfil = () => {
        const formData = new FormData();
    
        // Adiciona os dados do usuário como um objeto JSON
        formData.append('user', JSON.stringify({
            username: usuarioPerfil,
            email: emailPerfil,
        }));
    
        // Adiciona a imagem do perfil
        if (file) {
            console.log('File being uploaded:', file);  // Debugging line
            formData.append('profile[image]', file);
        }
    
        // Send the form data to the server
        axiosInstance2.put('/profile/update/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Ensure it's multipart/form-data
            },
        })
        .then((response) => {
            console.log("Perfil atualizado com sucesso", response.data);
            alert('Perfil atualizado com sucesso!');
        })
        .catch((error) => {
            console.error('Erro ao salvar o perfil:', error);
            if (error.response) {
                console.error("Data:", error.response.data); // Mensagem de erro do backend
                console.error("Status:", error.response.status); // Código de status (400)
                console.error("Headers:", error.response.headers); // Cabeçalhos da resposta
                alert('Erro ao salvar o perfil: ' + (error.response.data.detail || 'Erro desconhecido'));
            } else if (error.request) {
                console.error("Request:", error.request); // Requisição feita, mas sem resposta
                alert('Erro ao salvar o perfil: Sem resposta do servidor.');
            } else {
                console.error("Error:", error.message); // Erro ao configurar a requisição
                alert('Erro ao salvar o perfil: ' + error.message);
            }
        });
    };
    

    return (
        <div>
            <Navbar2 className="navbar2"/>
            <div className="containerperfil">
                <div className="boxperfil">
                    <Link to="/perfil">
                        <button className="botaovoltar"><ArrowBackIosNewIcon /></button>
                    </Link>

                    {file ? (
                        <AvatarPerfil file={file} /> // Exibe a nova imagem selecionada
                    ) : post ? (
                        <AvatarPerfil file={`http://127.0.0.1:8000${post.profile.image}`} /> // Exibe a imagem atual do perfil
                    ) : error ? (
                        <p>{error}</p> // Exibe uma mensagem de erro
                    ) : (
                        <p>Carregando avatar...</p> // Exibe uma mensagem de carregamento
                    )}

                    <CustomizedDialogs>
                        <ImageUpload setFile={handleFileChange}/>
                    </CustomizedDialogs>

                    <div className="infoPerfil">
                        <div className="UserPerfil2" style={{ width: '400px' }}>
                            {post ? (
                                <div>Usuário: <EditUsername usuarioPerfil={usuarioPerfil} setUsuarioPerfil={setUsuarioPerfil} /></div>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                <p>Carregando nome...</p>
                            )}
                        </div>

                        <div className="EmailPerfil2">
                            {post ? <p>Email: {emailPerfil}</p> : error ? <p>{error}</p> : <p>Carregando e-mail...</p>}
                        </div>

                        <div className="SenhaPerfil2">
                            <p>Senha:</p>
                        </div>

                        <div className="RedefinirSenha">
                            <Link className="redefinirperfil" to="/request/password-reset">
                                Redefinir a Senha?
                            </Link>
                        </div>

                        <Link to="/editar-perfil">
                            <ButaoPerfil text="Salvar Perfil" onClick={salvarPerfil}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditInfoPerfil;