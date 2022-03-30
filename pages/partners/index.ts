// API
import api from 'api';

import Partners from './Partners';

export async function getServerSideProps() {
  try {
    const partnersGeneral = await api.partners.getPartnersGeneral();
    const partnersRegular = await api.partners.getPartnersRegular();
    const partnersMHL = await api.partners.getPartnersMHL();

    return {
      props: { partnersGeneral, partnersRegular, partnersMHL }
    };
  } catch (error) {
    console.error(error);

    return {
      props: { partnersGeneral: [], partnersRegular: [], partnersMHL: [] }
    };
  }
}

export default Partners;
