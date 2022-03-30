// API
import api from 'api';

import Coaches from './Coaches';

export async function getServerSideProps() {
  try {
    const coaches = await api.coaches.getCoaches();

    return {
      props: { coaches }
    };
  } catch (error) {
    console.error(error);

    return {
      props: { coaches: [] }
    };
  }
}

export default Coaches;
