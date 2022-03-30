import React from 'react';

// Types
import { IManagers } from 'interfaces/manager';

// Components
import Layout from 'components/Layout';
import Card from 'components/Card/Card';

import classes from './FrontOffice.module.scss';

interface IProps {
  managers: IManagers[];
}

const FrontOffice = ({ managers = [] }: IProps) => {
  return (
    <Layout title="Front-office">
      <div className={classes.managers}>
        <div className={classes.managers__container}>
          <h1 className={classes.managers__title}>Руководство</h1>
          {managers ? (
            managers.map((manager) => (
              <Card
                key={manager.id}
                card={{
                  position: manager.position,
                  full_name: manager.full_name,
                  birthday: manager.birthday_long,
                  age: manager.age,
                  achievements: manager.achievements,
                  biography: manager.about,
                  imageUrl: manager.photo,
                  about_short: '',
                  about_dropdown: ''
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

export default FrontOffice;
