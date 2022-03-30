// Types
import { ISeason } from 'interfaces/season';

import axios from './helpers/axios';

export default {
  async getSeasons(): Promise<ISeason[]> {
    const response = await axios.get('seasons');

    return response.data;
  }
};
