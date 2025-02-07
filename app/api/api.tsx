// api/api.js
import axios from 'axios';

// Configuración base de Axios
const api = axios.create({
  baseURL: 'http://localhost:7000/', // Endpoint base para todas las solicitudes
  headers: {
    'Content-Type': 'application/json', // Asegura que se envíe como JSON
  },
});

export default api;
