import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

// Types
import { ICard } from 'interfaces/card';

import classes from './Card.module.scss';

interface IProps {
  card: ICard;
}

const Card = ({ card }: IProps): ReactElement => {
  const [showBio, setShowBio] = useState(false);
  const [bioIdx, setBioIdx] = useState(0);

  return (
    <div className={classes.card}>
      <div className={classes.card__container}>
        <div className={classes.card__wrapp}>
          <div className={classes.card__pic}>
            <div className={classes.card__pic__bg}>
              <div className={classes.card__pic__person}>
                <picture>
                  <Image
                    src={card.imageUrl}
                    layout="fill"
                    objectFit="contain"
                    alt=""
                  />
                </picture>
              </div>
            </div>
          </div>
          <div className={classes.card__descr}>
            <div className={classes.card__descr__title}>{card.position}</div>
            <div className={classes.card__descr__name}>{card.full_name}</div>
            <div className={classes.card__descr__date}>
              <div className={classes.card__descr__birthday}>
                Дата рождения: {card.birthday}
              </div>
              <div className={classes.card__descr__age}>
                {card.age ? `, ${card.age}` : null}
              </div>
            </div>

            <div className={classes.card__descr__description}>
              {card.biography}
              {card.about_short}
            </div>
          </div>
        </div>
        <div
          className={clsx(classes.card__bio, {
            [classes.card__bioOn]: showBio,
            [classes.card__bio__coach]: card.about_dropdown ?? null
          })}
        >
          <div className={classes.card__bio__coaches}>
            <div className={classes.card__bio__coaches__empty}></div>
            <div className={classes.card__bio__coaches__wrap}>
              <div>{card.about_dropdown}</div>
            </div>
          </div>
          <div className={classes.card__bio__years}>
            <ul className={classes.card__bio__years__menu}>
              {card.achievements.map(
                (achievement): ReactElement => (
                  <li
                    key={achievement.employee_id}
                    className={classes.card__bio__years__item}
                  >
                    <Link href={achievement.years}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setBioIdx(card.achievements.indexOf(achievement));
                        }}
                        className={classes.card__bio__years__link}
                      >
                        {achievement.years}
                      </a>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {card.achievements
            ? card.achievements.map((achievement, idx: any) =>
                idx === bioIdx ? (
                  <div key={idx} className={classes.card__bio__descr}>
                    {achievement.achievement}
                  </div>
                ) : null
              )
            : null}
        </div>
        <div
          className={classes.card__bio__button}
          onClick={() => setShowBio(!showBio)}
        >
          <button
            className={clsx(classes.card__bio__button__link, {
              [classes.card__bio__button__linkOn]: showBio
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
