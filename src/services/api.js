import axios from 'axios';

import { API_URL, API_VERSION } from '../utils/urls';

export const api = axios.create({
  baseURL: `${API_URL}/${API_VERSION}/`,
});
