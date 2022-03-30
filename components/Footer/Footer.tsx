import React from 'react';
import Image from 'next/image';

import FooterLink from './FooterLink/FooterLink';
import FooterAdress from './FooterAdress/FooterAdress';

import classes from './Footer.module.scss';

const menu = [
  {
    item: 'Клуб',
    id: 1,
    submenu: [
      { link: 'О клубе', url: '/about', id: 1 },
      { link: 'Руководство', url: '/front-office', id: 2 },
      { link: 'Спонсоры и партнеры', url: '/partners', id: 3 },
      { link: 'Контакты', url: '/clubcontacts', id: 4 }
    ]
  },
  {
    item: 'Команда',
    id: 2,
    submenu: [
      { link: 'Игроки', url: '/players', id: 5 },
      { link: 'Тренерский штаб', url: '/coaches', id: 6 },
      { link: 'Персонал', url: '/staff', id: 7 }
    ]
  },
  {
    item: 'Арена',
    id: 3,
    submenu: [
      { link: 'Арена', url: '/arena', id: 8 },
      { link: 'Правила посещения', url: '/rules', id: 9 }
    ]
  },
  {
    item: 'Фан-клуб',
    id: 4,
    submenu: [{ link: 'Фан-клуб', url: '/fanclub', id: 10 }]
  }
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__partners}>
        <div className={classes.footer__container}>
          <div className={classes.footer__partners__section}>
            <div className={classes.footer__partners__title}>
              Генеральные партнеры
            </div>
            <div className={classes.footer__partners__icons}>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/gazprom.png`}
                  width={150}
                  height={50}
                  alt=""
                />
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/gdrive.png`}
                  width={150}
                  height={30}
                  alt=""
                />
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/genergy.png`}
                  width={180}
                  height={30}
                  alt=""
                />
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/gdrive.png`}
                  width={150}
                  height={30}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={classes.footer__partners__section}>
            <div className={classes.footer__partners__title}>Партнеры</div>
            <div className={classes.footer__partners__icons}>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/braun.png`}
                  width={60}
                  height={30}
                  alt=""
                />
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/chempionat.png`}
                  width={30}
                  height={40}
                  alt=""
                />
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/braun.png`}
                  width={60}
                  height={30}
                  alt=""
                />
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/chempionat.png`}
                  width={30}
                  height={40}
                  alt=""
                />
              </div>{' '}
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/braun.png`}
                  width={60}
                  height={30}
                  alt=""
                />
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/chempionat.png`}
                  width={30}
                  height={40}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={classes.footer__partners__section}>
            <div className={classes.footer__partners__title}>
              Партнеры Париматч Чемпионата МХЛ сезона 2019/2020
            </div>
            <div className={classes.footer__partners__icons}>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/mastercard.png`}
                  width={52}
                  height={32}
                  alt=""
                />
                <div className={classes.footer__icon__title}>
                  Официальный партнер
                </div>
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/eriell.png`}
                  width={32}
                  height={32}
                  alt=""
                />
                <div className={classes.footer__icon__title}>
                  Официальный партнер
                </div>
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/rostelekom.png`}
                  width={40}
                  height={40}
                  alt=""
                />
                <div className={classes.footer__icon__title}>Партнер</div>
              </div>
              <div className={classes.footer__partners__icon}>
                <Image
                  src={`/images/partners/haier.png`}
                  width={60}
                  height={20}
                  alt=""
                />
                <div className={classes.footer__icon__title}>Партнер</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footer__navigation}>
        <div className={classes.footer__container}>
          <nav className={classes.footer__nav}>
            <ul className={classes.footer__menu}>
              {menu.map((link) => (
                <FooterLink key={link.id} link={link} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <FooterAdress />
    </footer>
  );
};
export default Footer;
