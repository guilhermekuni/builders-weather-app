import axios from 'axios';

import { API_URL, API_VERSION, API_KEY } from '../utils/env';

const api = axios.create({
  baseURL: `${API_URL}/${API_VERSION}/`,
});

const getQueryParams = params => {
  return {
    ...params,
    appid: API_KEY,
    lang: 'pt_br',
    units: 'metric',
  };
};

export const getWeatherByCoords = ({ lat, lon }) =>
  api.get(`weather`, { params: getQueryParams({ lat, lon }) });