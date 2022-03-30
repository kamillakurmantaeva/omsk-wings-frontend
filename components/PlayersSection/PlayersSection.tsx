import React from 'react';
import PlayerCard from 'components/PlayerCard/PlayerCard';
import { IPlayer } from 'interfaces/player';
import classes from './PlayersSection.module.scss';

const PlayersSection = ({ players = [], title, icon, position }: any) => {
  return (
    <section className={classes.players__section}>
      <div className={classes.players__section__header}>
        <div className={classes.players__section__icon}>
          <i className={`icon-${icon}`} />
        </div>
        <div className={classes.players__section__title}>{title}</div>
      </div>
      <div className={classes.players__cards}>
        {players.map((player: IPlayer) => {
          if (player.position === position) {
            return (
              <PlayerCard
                key={player.id}
                players={{
                  imageUrl: player.photo,
                  position: player.position,
                  fullName: player.full_name,
                  birthday: player.birthday_short,
                  number: player.number
                }}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default PlayersSection;
