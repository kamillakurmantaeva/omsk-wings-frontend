import React from 'react';
import Image from 'next/image';

import hawk from '../../public/images/fanclub_assets/hawk.svg';
import worldCup from 'public/images/about_assets/world_cup.svg';
import kharlamovCup from 'public/images/about_assets/kharlamov_cup.svg';

import classes from './AboutPromo.module.scss';

const AboutPromo = () => {
  return (
    <div className={classes.about__promo}>
      <div className={classes.container}>
        <div className={classes.about__promo__title}>О команде</div>
        <div className={classes.about__promo__content}>
          <div className={classes.about__promo__text}>
            <div className={classes.about__promo__subtitle}>
              Молодежная команда «Омские ястребы»
            </div>
            <div className={classes.about__promo__descr}>
              «Омские Ястребы» - молодежный хоккейный клуб из Омска, основан в
              2009 году, является молодежной командой омского «Авангарда» из
              КХЛ. Выступает в Восточной конференции Молодежной Хоккейной Лиги
              (МХЛ), является обладателем Кубка Харламова сезонов 2011/2012 и
              2012/2013 годов. Главный тренер команды - Олег Угольников.
              Чемпионы мира в составе молодежной сборной России: Никита
              Пивцакин, Сергей Калинин.
            </div>
          </div>
          <div className={classes.about__promo__img}>
            <Image src={hawk} objectFit="cover" alt="Hawk" />
          </div>
        </div>
        <div className={classes.about__promo__icons}>
          <div className={classes.about__promo__icons__item}>
            <div className={classes.about__item__cup}>
              <Image src={kharlamovCup} objectFit="contain" alt="" />
            </div>
            <div className={classes.about__item__text}>
              <div className={classes.about__item__year}>2012</div>
              <div className={classes.about__item__title}>кубок харламова</div>
            </div>
          </div>
          <div className={classes.about__promo__icons__item}>
            <div className={classes.about__item__cup}>
              <Image src={kharlamovCup} objectFit="contain" alt="" />
            </div>
            <div className={classes.about__item__text}>
              <div className={classes.about__item__year}>2013</div>
              <div className={classes.about__item__title}>кубок харламова</div>
            </div>
          </div>
          <div className={classes.about__promo__icons__item}>
            <div className={classes.about__item__cup}>
              <Image src={worldCup} objectFit="contain" alt="" />
            </div>
            <div className={classes.about__item__text}>
              <div className={classes.about__item__year}>2013</div>
              <div className={classes.about__item__title}>кубок мира</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutPromo;
