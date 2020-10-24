import axios from 'axios';

import { API_URL, API_VERSION, API_KEY } from '../utils/env';

const api = axios.create({
  baseURL: `${API_URL}/${API_VERSION}/`,
});

const getQueryParams = params => ({
  ...params,
  appid: API_KEY,
  lang: 'pt_br',
  units: 'metric',
});

export const getWeatherByCoords = ({ lat, lon }) =>
  api.get(`weather`, { params: getQueryParams({ lat, lon }) });

export const getNextDaysWeatherForecast = ({ lat, lon }) =>
  api.get(`onecall`, {
    params: getQueryParams({
      lat,
      lon,
      cnt: 5,
      exclude: 'current,minutely,hourly,alerts',
    }),
  });
