import React from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import classes from './Partner.module.scss';

const Partner = ({ partner }: any) => {
  const style = clsx({
    [classes.partners__item]: true,
    [classes.other]: partner.type !== 'general' //only when open === true
  });
  return (
    <div className={style}>
      <div className={classes.partners__item__icon}>
        <Image src={partner.logo} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className={classes.partners__item__title}>{partner.name} </div>
      <div className={classes.partners__item__descr}>
        {partner.description}{' '}
      </div>
    </div>
  );
};
export default Partner;
