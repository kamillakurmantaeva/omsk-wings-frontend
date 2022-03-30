// API
import api from 'api';

import Fanclub from './Fanclub';

export async function getServerSideProps() {
  try {
    const socialMedias = await api.fanclub.getSocialMedias();
    const countries = await api.fanclub.getCountries();
    const fansPhotos = await api.fanclub.getFansPhotos();

    return {
      props: { socialMedias, countries, fansPhotos }
    };
  } catch (error) {
    console.error(error);

    return {
      props: { socialMedias: [], countries: [], fansPhotos: [] }
    };
  }
}

export default Fanclub;
