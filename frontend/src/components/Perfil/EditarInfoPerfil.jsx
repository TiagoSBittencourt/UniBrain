import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importando useNavigate
import AvatarPerfil from './Avatar';
import EditUsername from './EditUsername';
import ButaoPerfil from './ButaoPerfil';
import ImageUpload from './ImageUpload';
import CustomizedDialogs from './DialogPerfil';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axiosInstance2 from './axiosInstance2';
import './PaginadePerfil.css';
import Navbar3 from '../Navbar3';

function EditInfoPerfil() {
    const [file, setFile] = useState(null);
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    const [usuarioPerfil, setUsuarioPerfil] = useState('');
    const [emailPerfil, setEmailPerfil] = useState('');
    
    // Inicializa o hook de navegação
    const navigate = useNavigate(); 

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
    
        // Adiciona os dados do usuário em um objeto JSON
        const userData = {
            username: usuarioPerfil,
            email: emailPerfil,
        };
        formData.append('user', JSON.stringify(userData)); // Envia o objeto `user` como JSON
    
        // Adiciona a nova imagem do perfil (se houver)
        if (file) {
            formData.append("image", file); // Envia o novo arquivo de imagem
            const token = localStorage.getItem('token');
            fetch('http://127.0.0.1:8000/profile/update/', {
                method: 'PUT',
                headers: {
                  "Authorization": "Token " + token
                },
                body: formData
              })
              .then(response => response.json())
              .then(data => console.log(data))
              .catch(error => console.error('Error:', error));
        }
    
        // Log para depuração (verifique o console do navegador)
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    
        axiosInstance2.put('/profile/update/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((response) => {
            console.log("Perfil atualizado com sucesso", response.data);
            setPost(response.data); // Atualiza o estado com os novos dados
            alert('Perfil atualizado com sucesso!');
            // Redireciona para a página de perfil após salvar
            navigate('/perfil');
        })
        .catch((error) => {
            console.error('Erro ao salvar o perfil:', error);
            console.error('Resposta do servidor:', error.response?.data); // Log detalhado do erro
    
            // Exibe os erros específicos retornados pelo servidor
            if (error.response?.data?.errors) {
                console.error('Erros:', error.response.data.errors);
                alert('Erros ao salvar o perfil: ' + JSON.stringify(error.response.data.errors));
            } else {
                alert('Erro ao salvar o perfil: ' + (error.response?.data?.detail || 'Erro desconhecido'));
            }
        });
    };

    return (
        <div>
            <Navbar3 className="navbar2"/>
            <div className="containerperfil">
                <div className="boxperfil">
                    <Link to="/perfil">
                        <button className="botaovoltar"><ArrowBackIosNewIcon /></button>
                    </Link>

                    {file ? (
                        <AvatarPerfil file={URL.createObjectURL(file)} /> // Exibe a nova imagem selecionada
                    ) : post ? (
                        <AvatarPerfil file={post.profile.image ? `http://127.0.0.1:8000${post.profile.image}` : null} /> // Exibe a imagem atual do perfil
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
                            <p>Senha: ******</p>
                        </div>

                        <div className="RedefinirSenha">
                            <Link className="redefinirperfil" to="/request/password-reset">
                                Redefinir a Senha?
                            </Link>
                        </div>

                        {/* Usando o onClick para chamar a função salvarPerfil e redirecionar */}
                        <ButaoPerfil text="Salvar Perfil" onClick={salvarPerfil}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditInfoPerfil;
