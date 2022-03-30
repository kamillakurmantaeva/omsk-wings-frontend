// Types
import { ICoaches } from 'interfaces/coaches';

import axios from './helpers/axios';

export default {
  async getCoaches(): Promise<ICoaches[]> {
    const response = await axios.get('coaches/');

    return response.data;
  }
};
