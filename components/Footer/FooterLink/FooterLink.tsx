import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import classes from './FooterLink.module.scss';

const FooterLink = ({ link }: any) => {
  const [menu, setMenu] = useState(false);

  return (
    <li
      onMouseOver={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
      className={clsx(classes.footer__link, {
        [classes.footer__link_on]: menu
      })}
    >
      <Link href="">
        <a>{link.item}</a>
      </Link>
      <ul className={classes.footer__submenu}>
        {link.submenu.map((item: any) => (
          <li key={item.id} className={classes.footer__submenu__link}>
            <Link href={item.url}>
              <a>{item.link}</a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default FooterLink;
