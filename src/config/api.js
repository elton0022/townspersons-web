import axios from 'axios';
import { api_url } from '../../env';

const prod = "https://townsperson-api.herokuapp.com"

export const api = axios.create({
    baseURL: api_url || prod
});

export const apiViaCEP = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});
