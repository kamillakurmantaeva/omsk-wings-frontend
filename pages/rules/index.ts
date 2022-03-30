// API
import api from 'api';

import Rules from './Rules';

export async function getServerSideProps() {
  try {
    const rules = await api.rules.getRules();

    return {
      props: { rules }
    };
  } catch (error) {
    console.error(error);

    return {
      props: { rules: [] }
    };
  }
}

export default Rules;
