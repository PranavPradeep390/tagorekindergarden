
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://admin.tagorekindergarten.com/api', 
  headers: {
    'Content-Type': 'application/json'
  }
});

export default AxiosInstance;

