import { GetServerSideProps } from 'next';

import api from 'api';

import About from './About';

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const seasons = await api.seasons.getSeasons();
    return {
      props: { seasons }
    };
  } catch (error) {
    console.error(error);
    return {
      props: { seasons: [] }
    };
  }
};

export default About;
