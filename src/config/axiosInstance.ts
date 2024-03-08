import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
  return config;
});
export default axiosInstance;
