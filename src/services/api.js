import axios from 'axios';
import { store } from '../store';

import { API_URL, API_VERSION, API_KEY } from '../utils/env';

// import { handleError } from '../store/modules/error/actions';
import { setLoading } from '../store/modules/loading/actions';

const api = axios.create({
  baseURL: `${API_URL}/${API_VERSION}/`,
});

api.interceptors.request.use(config => {
  store.dispatch(setLoading(true));
  return config;
});

api.interceptors.response.use(
  response => {
    store.dispatch(setLoading(false));
    return response;
  },
  err => {
    if (err) {
      // store.dispatch(handleError(err.response));
      console.error(err);
    }

    store.dispatch(setLoading(false));

    throw new Error(err);
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
