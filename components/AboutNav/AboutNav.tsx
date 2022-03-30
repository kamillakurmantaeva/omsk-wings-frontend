import React from 'react';

import classes from './AboutNav.module.scss';

const AboutNav = () => {
  return (
    <nav className={classes.about__nav}>
      <ul className={classes.about__menu}>
        <li className={classes.about__menu__item}>
          <a href="#2009/10">2009/10</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2010/11">2010/11</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2011/12">2011/12</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2012/13">2012/13</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2013/14">2013/14</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2014/15">2014/15</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2015/16">2015/16</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2016/17">2016/17</a>
        </li>
        <li className={classes.about__menu__item}>
          <a href="#2018/19">2018/19</a>
        </li>
      </ul>
    </nav>
  );
};

export default AboutNav;
