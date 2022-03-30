// Types
import { IManagers } from 'interfaces/manager';

import axios from './helpers/axios';

export default {
  async getManagers(): Promise<IManagers[]> {
    const response = await axios.get('managers/');

    return response.data;
  }
};
