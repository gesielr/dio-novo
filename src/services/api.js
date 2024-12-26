import axios from 'axios';

// Configura a instância do Axios
const api = axios.create({
  baseURL: 'http://localhost:5000', // Substitua pela URL da sua API
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o token ao cabeçalho para autenticação
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
