import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { ISeason } from 'interfaces/season';

import classes from './AboutSection.module.scss';

interface IProps {
  season: ISeason;
}

const AboutSection = ({ season }: IProps) => {
  return (
    <div id={season.season} className={classes.about__section}>
      <div className={classes.container}>
        <div className={classes.about__section__content}>
          <div className={classes.about__section__title}>
            Сезон {season.season}
          </div>
          <div className={classes.about__section__descr}>
            {season.description}
          </div>
          <div className={classes.about__section__result}>
            <span>Итог:</span>
            {season.result}
          </div>
          <div className={classes.about__section__trophies}>
            {season.trophies
              ? season.trophies.map((trophy) => {
                  return (
                    <div
                      key={trophy.event}
                      className={classes.about__section__trophy}
                    >
                      <i
                        className={clsx(
                          classes.about__section__trophy__icon,
                          'icon-cup'
                        )}
                      >
                        <span>{trophy.place}</span>
                      </i>
                      <div className={classes.about__section__trophy__descr}>
                        {trophy.place}
                        {` место. "Омские ястребы"-`}
                        {season.season}
                        <div className={classes.about__section__trophy__event}>
                          {trophy.event}
                        </div>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
          <div className={classes.about__section__img}>
            <Image src={season.image} width={946} height={402} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
