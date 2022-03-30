import React from 'react';

import Link from './Link/Link';
import Social from '../HeaderTop/Social/Social';

import classes from './HeaderMiddle.module.scss';

const links = [
  { title: 'hawk.ru', icon: 'web', id: 1 },
  { title: 'Академия', icon: 'puck', id: 2 },
  { title: 'Магазин', icon: 't-shirt', id: 3 }
];
const socials = [
  { id: 1, imageUrl: '/images/header/inst.svg' },
  { id: 2, imageUrl: '/images/header/vk.svg' },
  { id: 3, imageUrl: '/images/header/tw.svg' },
  { id: 4, imageUrl: '/images/header/youtube.png' }
];

const HeaderMiddle = () => {
  return (
    <div className={classes.header__middle}>
      <div className={classes.header__middle__container}>
        <div className={classes.header__middle__links}>
          {links.map((link) => (
            <Link key={link.id} title={link.title} icon={link.icon} />
          ))}
        </div>
        <div className={classes.header__middle__socials}>
          {socials.map((social) => (
            <Social key={social.id} imageUrl={social.imageUrl} />
          ))}
        </div>
        <div className={classes.header__middle__modal}>
          <div className={classes.header__middle__modal__icon}>
            <i className="icon-entrance" />
          </div>
          <div className={classes.header__middle__modal__title}>Войти</div>
        </div>
      </div>
    </div>
  );
};
export default HeaderMiddle;
