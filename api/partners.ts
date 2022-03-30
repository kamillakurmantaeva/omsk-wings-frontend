// Types
import { IPartners } from 'interfaces/partners';

import axios from './helpers/axios';

export default {
  async getPartnersGeneral(): Promise<IPartners[]> {
    const response = await axios.get('sponsors-general/');

    return response.data;
  },

  async getPartnersRegular(): Promise<IPartners[]> {
    const response = await axios.get('sponsors-regular/');

    return response.data;
  },

  async getPartnersMHL(): Promise<IPartners[]> {
    const response = await axios.get('sponsors-MHL2019/');

    return response.data;
  }
};
