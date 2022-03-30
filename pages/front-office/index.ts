import { GetServerSideProps } from 'next';

// API
import api from 'api';

// import FrontOffice from './FrontOffice';

// export async function getServerSideProps() {
//   const response = await fetch('https://strapi.omsk-wings.effective.band/managers');
//   const managers = await response.json();
//   return {
//     props: { managers }
//   };
// }

// export default FrontOffice;

// API

import FrontOffice from './FrontOffice';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const managers = await api.managers.getManagers();
    return {
      props: { managers }
    };
  } catch (error) {
    console.error(error);
    return {
      props: { managers: [] }
    };
  }
};

export default FrontOffice;
