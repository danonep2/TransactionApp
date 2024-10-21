import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export { instance as axioInstace };
