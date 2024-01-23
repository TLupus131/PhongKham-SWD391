import axios from 'axios';

const LOCAL_URL = 'http://localhost:8080';
const SERVER_URL = '';

export default axios.create({
    baseURL: LOCAL_URL,
    headers: { "ngrok-ship-browser-warning": "true" }
});