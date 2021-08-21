import axios from 'axios';
import { api_url } from '../../env';

export const api = axios.create({
    baseURL: api_url
});

export const apiViaCEP = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});
