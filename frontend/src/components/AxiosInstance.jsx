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


export default AxiosInstance