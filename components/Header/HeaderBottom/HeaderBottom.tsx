import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { RemoveScroll } from 'react-remove-scroll';

import BottomLink from './BottomLink/BottomLink';

import classes from './HeaderBottom.module.scss';

const menu = [
  {
    id: 1,
    item: 'клуб',
    submenu: [
      { link: 'О клубе', url: '/about', id: 1 },
      { link: 'Руководство', url: '/front-office', id: 2 },
      { link: 'Спонсоры и партнеры', url: '/partners', id: 3 },
      { link: 'Контакты', url: '/clubcontacts', id: 4 }
    ]
  },
  {
    id: 2,
    item: 'Команда',
    submenu: [
      { link: 'Игроки', url: '/players', id: 5 },
      { link: 'Тренерский штаб', url: '/coaches', id: 6 },
      { link: 'Персонал', url: '/staff', id: 7 }
    ]
  },
  {
    id: 3,
    item: 'Фан-клуб',
    submenu: [{ link: 'Фан-клуб', url: '/fanclub', id: 8 }]
  },
  {
    id: 4,
    item: 'Арена',
    submenu: [
      { link: 'Арена', url: '/arena', id: 9 },
      { link: 'Правила посещения', url: '/rules', id: 10 }
    ]
  }
];

const HeaderBottom = () => {
  const [burger, setBurger] = useState(false);
  return (
    <div className={classes.bottom}>
      <div className={classes.bottom__container}>
        <div
          onClick={() => setBurger(!burger)}
          className={clsx(classes.bottom__burger, {
            [classes.bottom__burger_on]: burger
          })}
        >
          <span
            className={clsx(classes.bottom__burger__line, {
              [classes.bottom__burger__line_on]: burger
            })}
          ></span>
        </div>
        <div className={classes.bottom__logo}>
          <div className={classes.bottom__logo__img}>
            <Image
              src={`/images/header/logo-head.svg`}
              width={73}
              height={40}
              alt=""
            />
          </div>
          <div className={classes.bottom__logo__text}>
            <Image
              src={`/images/header/logo-title.svg`}
              width={117}
              height={37}
              alt="Омские ястребы"
            />
          </div>
        </div>
        {burger ? (
          <RemoveScroll>
            <nav
              className={clsx(classes.bottom__nav, {
                [classes.bottom__nav_on]: burger
              })}
            >
              <ul className={classes.bottom__menu}>
                {menu.map((link) => (
                  <BottomLink key={link.id} link={link} />
                ))}
              </ul>
            </nav>
          </RemoveScroll>
        ) : (
          <nav
            className={clsx(classes.bottom__nav, {
              [classes.bottom__nav_on]: burger
            })}
          >
            <ul className={classes.bottom__menu}>
              {menu.map((link) => (
                <BottomLink key={link.id} link={link} />
              ))}
            </ul>
          </nav>
        )}
        <div className={classes.bottom__ticket}>
          <i className="icon-ticket1" />
          <p>Билеты</p>
        </div>
      </div>
    </div>
  );
};
export default HeaderBottom;
