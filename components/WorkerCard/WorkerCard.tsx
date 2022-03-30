import React from 'react';
import Image from 'next/image';

import classes from './WorkerCard.module.scss';

const WorkerCard = (props: any) => {
  return (
    <div className={`${classes.worker__card} ${props.className}`}>
      <Image
        className={classes.worker__card__photo}
        src={props.imageUrl}
        width={210}
        height={210}
        alt="Фотография сотрудника"
      />
      <span className={classes.worker__card__name}>{props.name}</span>
      <span className={classes.worker__card__position}>{props.position}</span>
      <span className={classes.worker__card__experience}>{props.seasons}</span>
      <span className={classes.worker__card__birthday}>{props.birthday}</span>
    </div>
  );
};

export default WorkerCard;
