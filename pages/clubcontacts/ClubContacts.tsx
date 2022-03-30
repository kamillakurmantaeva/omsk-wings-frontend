import React from 'react';

// Components
import Layout from 'components/Layout';
import YMap from '../../components/YMap';

// Types
import { IContacts } from 'interfaces/contacts';

// Styles
import classes from './ClubContacts.module.scss';

interface IProps {
  contacts: IContacts[];
}

const ClubContacts = ({ contacts = [] }: IProps) => {
  return (
    <Layout title="Club Contacts">
      <div className={classes.contacts}>
        <h1 className={classes.contacts__headline}>Контакты</h1>
        <div className={classes.contacts__info}>
          {contacts.map(({ id, contact, line1, line2, line3 }) => (
            <div className={classes.contacts__card} key={id}>
              <h6 className={classes.contacts__title}>{contact}</h6>
              <p className={classes.contacts__text}>{line1}</p>
              <p className={classes.contacts__text}>{line2}</p>
              <p className={classes.contacts__text}>{line3}</p>
            </div>
          ))}
        </div>
        <div className={classes.contacts__map}>
          <YMap />
        </div>
      </div>
    </Layout>
  );
};

export default ClubContacts;
