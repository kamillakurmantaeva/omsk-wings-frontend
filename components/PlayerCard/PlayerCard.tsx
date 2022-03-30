import React from 'react';
import Image from 'next/image';
import classes from './PlayerCard.module.scss';

const PlayerCard = ({ players }: any) => {
  return (
    <div className={classes.playerCard}>
      <div className={classes.playerCard__image}>
        <div className={classes.playerCard__image__wrapp}>
          <div className={classes.playerCard__image__circle}>
            <div className={classes.playerCard__image__bg}>
              <div className={classes.playCard__image}>
                <Image
                  src={players.imageUrl}
                  alt="image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className={classes.playerCard__image__number}>
            <div className={classes.playerCard__penta}>
              <i className="icon-penta" />
            </div>
            <div className={classes.playerCard__number}>{players.number}</div>
          </div>
        </div>
      </div>
      <div className={classes.playerCard__fullName}>{players.fullName}</div>
      <div className={classes.playerCard__position}>{players.position}</div>
      <div className={classes.playerCard__birthday}>{players.birthday}</div>
    </div>
  );
};

export default PlayerCard;
