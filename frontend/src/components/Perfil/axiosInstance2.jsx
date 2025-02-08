import axios from 'axios';

const axiosInstance2 = axios.create({
    baseURL: 'http://127.0.0.1:8000/', // Substitua pela URL da sua API
});

axiosInstance2.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log('Token adicionado ao cabeçalho:', config.headers.Authorization);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});



export default axiosInstance2;