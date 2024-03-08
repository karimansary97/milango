import axios from 'axios';
import Config from 'react-native-config';

const axiosInstance = axios.create({
  baseURL: Config.API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(config => {
  return config;
});
export default axiosInstance;
