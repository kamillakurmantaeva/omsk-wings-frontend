import axios from 'axios';

// Stores
import pageLoaderStore from 'stores/PageLoaderStore';

const instance = axios.create({
  baseURL: 'http://134.122.89.202/'
});

instance.interceptors.request.use((config) => {
  const { setLoading } = pageLoaderStore;

  setLoading(true);

  return config;
});

instance.interceptors.response.use((config) => {
  const { setLoading } = pageLoaderStore;

  setLoading(false);

  return config;
});

export default instance;
