import React from 'react';
import Image from 'next/image';

import classes from './Icon.module.scss';

const Icon = ({ imageUrl, onClick }: any) => {
  return (
    <div onClick={onClick} className={classes.icon}>
      <Image src={imageUrl} layout="fill" objectFit="contain" alt="" />
    </div>
  );
};

export default Icon;
