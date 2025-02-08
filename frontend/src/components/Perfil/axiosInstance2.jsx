import axios from 'axios';

const axiosInstance2 = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // URL do backend
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// Interceptor para adicionar o token Knox
axiosInstance2.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Verifique se a chave está correta!

    if (token) {
        config.headers.Authorization = `Token ${token}`; // Knox usa "Token" em vez de "Bearer"
        console.log('Token adicionado ao cabeçalho:', config.headers.Authorization);
    } else {
        console.warn("Nenhum token encontrado no localStorage!");
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance2;