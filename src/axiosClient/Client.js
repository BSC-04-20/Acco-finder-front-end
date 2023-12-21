import axios from "axios";

const Client = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'X-Requested-with':'XMLHttpRequest',
    },
    withCredentials:true,
    withXSRFToken:true
})

export default Client;