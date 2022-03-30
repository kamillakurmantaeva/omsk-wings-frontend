import React from 'react';
import Image from 'next/image';

import classes from './Social.module.scss';

interface IProps {
  imageUrl: string;
}

const Social = ({ imageUrl }: IProps): JSX.Element => {
  return (
    <div className={classes.social}>
      <Image src={imageUrl} layout="fill" objectFit="contain" alt="" />
    </div>
  );
};

export default Social;
