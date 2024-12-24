import axios from 'axios'

const baseUrl = "http://127.0.0.1:8000/"


// Component to make API calls
const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }

    // TODO: Add Token in Future

})

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("Token")

        if (token) {
            config.headers.Authorization = `Token ${token}` // if passed token
        }
        else {
            config.headers.Authorization = ``
        }

        return config
    },
    // (error) => {
    //     return Promise.reject(error)
    // }

)

AxiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        // token expired or invalid
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("Token") // remove the token
            window.location.href = "/login" // redirect -> login page
        }

    }

)

export default AxiosInstance