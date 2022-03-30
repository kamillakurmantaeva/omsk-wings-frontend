// Types
import { IStaff } from 'interfaces/staff';

import axios from './helpers/axios';

export default {
  async getStaff(): Promise<IStaff[]> {
    const response = await axios.get('staff/');

    return response.data;
  }
};
