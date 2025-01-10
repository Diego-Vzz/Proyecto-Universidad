import axios, { type AxiosInstance } from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const api: AxiosInstance = axios.create({
    baseURL: apiUrl,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
    },
    // withCredentials: true,
});

api.interceptors.request.use(
    async (config) => {
        // const token = Cookies.get('token');
        // if (token) {
        //     config.headers["Authorization"] = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;