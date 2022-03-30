// Types
import { ICountries, IFansPhotos, ISocialMedia } from 'interfaces/fanclub';

import axios from './helpers/axios';

export default {
  async getSocialMedias(): Promise<ISocialMedia[]> {
    const response = await axios.get('social-media/');

    return response.data;
  },

  async getCountries(): Promise<ICountries[]> {
    const response = await axios.get('fanclub-countries/');

    return response.data;
  },

  async getFansPhotos(): Promise<IFansPhotos[]> {
    const response = await axios.get('fanclub-photos/');

    return response.data;
  }
};
