// Types
import { IPlayer } from 'interfaces/player';

import axios from './helpers/axios';

export default {
  async getPlayers(): Promise<IPlayer[]> {
    const response = await axios.get('players/');

    return response.data;
  }
};
