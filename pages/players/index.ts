import { GetServerSideProps } from 'next';

// API
import api from 'api';

import Players from './Players';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const players = await api.players.getPlayers();

    return {
      props: { players }
    };
  } catch (error) {
    console.error(error);

    return {
      props: { players: [] }
    };
  }
};

export default Players;
