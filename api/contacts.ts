// Types
import { IContacts } from 'interfaces/contacts';

import axios from './helpers/axios';

export default {
  async getContacts(): Promise<IContacts[]> {
    const response = await axios.get('contacts/');

    return response.data;
  }
};
