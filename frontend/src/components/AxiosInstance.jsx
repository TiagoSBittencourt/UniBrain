import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/"

const AxiosInstance = axios.create({
    baseUrl: baseUrl,
    timeout: 5000,
    headers: {
        "Content-Type":"aplication/json",
        accept:"aplication/json"
    }

})

export default AxiosInstance