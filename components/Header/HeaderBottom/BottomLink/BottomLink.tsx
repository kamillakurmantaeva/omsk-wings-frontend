import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import classes from './BottomLink.module.scss';

const BottomLink = ({ link }: any): JSX.Element => {
  const [menu, setMenu] = useState(false);
  return (
    <li
      key={link.id}
      onClick={() => setMenu(!menu)}
      className={clsx(classes.bottom__link, {
        [classes.bottom__link_on]: menu,
        [classes.bottom__link_up]: menu
      })}
    >
      <Link href="">
        <a>{link.item}</a>
      </Link>
      <ul
        className={clsx(classes.bottom__submenu, {
          [classes.bottom__submenu_on]: menu
        })}
      >
        <div
          onClick={() => setMenu(!menu)}
          className={classes.bottom__submenu__back}
        >
          <span className={classes.bottom__submenu__line}></span>
        </div>
        {link.submenu.map((item: any) => (
          <li
            key={item.id}
            onClick={() => setMenu(!menu)}
            className={classes.bottom__submenu__link}
          >
            <Link href={item.url}>
              <a>{item.link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default BottomLink;
