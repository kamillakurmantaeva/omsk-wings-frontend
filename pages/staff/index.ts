// API
import api from 'api';

import Staff from './Staff';

export async function getServerSideProps() {
  try {
    const staff = await api.staff.getStaff();

    return {
      props: { staff }
    };
  } catch (error) {
    console.error(error);

    return {
      props: { staff: [] }
    };
  }
}

export default Staff;
