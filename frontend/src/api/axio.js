import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Log de requisições (apenas desenvolvimento)
if (import.meta.env.DEV) {
  api.interceptors.request.use((config) => {
    console.log(` ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  });
}

// Tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || 'Erro na requisição';
    console.error(' API Error:', message);
    return Promise.reject({ ...error, message });
  }
);

export default api;
