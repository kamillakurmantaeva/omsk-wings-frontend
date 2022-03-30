// Types
import { IRules } from 'interfaces/rules';

import axios from './helpers/axios';

export default {
  async getRules(): Promise<IRules[]> {
    const response = await axios.get('rules/');

    return response.data;
  }
};
