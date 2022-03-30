import React from 'react';

// Components
import Card from '../../components/Card/Card';
import Layout from '../../components/Layout';

// Types
import { ICoaches } from 'interfaces/coaches';

//Styles
import classes from './Coaches.module.scss';

interface IProps {
  coaches: ICoaches[];
}

const Coaches = ({ coaches = [] }: IProps) => {
  return (
    <Layout title="Coaches">
      <div className={classes.coach}>
        <div className={classes.coach__back}>
          <h1 className={classes.coach__headline}>Тренерский штаб</h1>
          {coaches ? (
            coaches.map((coach) => (
              <Card
                key={coach.id}
                card={{
                  position: coach.position,
                  full_name: coach.full_name,
                  biography: '',
                  birthday: coach.birthday_long,
                  age: '',
                  achievements: [],
                  about_short: coach.about_short,
                  about_dropdown: coach.about_dropdown,
                  imageUrl: coach.photo
                }}
              />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Coaches;
