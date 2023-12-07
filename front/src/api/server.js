import Axios from 'axios';
import { setToken } from '../configs/localstorage';
import { API, Routes } from './consts';

export const api = Axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setHeaders = (token) => {
  api.defaults.headers.common.Token = token;
};

export const post = async (key, input, fn, fail = () => {}) => {
  try {
    const route = Routes.post[key];
    const { data } = await api.post(route, input);
    if (key === 'auth' || key === 'reg') {
      api.defaults.headers.common.Token = data.token;
      setToken(data.token);
    }
    fn(data);
    return data;
  } catch (error) {
    fail(error);
    return null;
  }
};

export const get = async (key, fn = () => {}, fail = () => {}) => {
  try {
    const route = Routes.get[key];
    const { data } = await api.get(route);
    fn(data);
    return data;
  } catch (error) {
    fail(error);
    return null;
  }
};

export const put = async (key, id, input, fn = () => {}, fail = () => {}) => {
  try {
    const route = `${Routes.put[key]}${id}`;
    const { data } = await api.put(route, input);
    fn(data);
    return data;
  } catch (error) {
    fail(error);
    return null;
  }
};

export const _delete = async (key, id, fn = () => {}, fail = () => {}) => {
  try {
    const route = `${Routes.delete[key]}${id}`;
    const { data } = await api.delete(route);
    fn(data);
    return data;
  } catch (error) {
    fail(error);
    return null;
  }
};
