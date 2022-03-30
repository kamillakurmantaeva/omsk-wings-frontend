import React from 'react';

import HeaderTop from './HeaderTop/HeaderTop';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderBottom from './HeaderBottom/HeaderBottom';

import classes from './Header.module.scss';

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
};
export default Header;
