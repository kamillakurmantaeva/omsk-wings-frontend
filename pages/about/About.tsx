import React from 'react';
import Layout from 'components/Layout';

// Types
import { ISeason } from 'interfaces/season';

import AboutPromo from 'components/AboutPromo/AboutPromo';
import AboutSection from 'components/AboutSection/AboutSection';
import AboutNav from 'components/AboutNav/AboutNav';
import classes from './About.module.scss';

interface IProps {
  seasons: ISeason[];
}

const About = ({ seasons = [] }: IProps) => {
  return (
    <Layout title="about">
      <AboutPromo />
      <div className={classes.about__content}>
        <div className={classes.about__content__sections}>
          {seasons.map((season) => (
            <AboutSection key={season.id} season={season} />
          ))}
        </div>
        <AboutNav />
      </div>
    </Layout>
  );
};
export default About;
