import React from 'react';
import clsx from 'clsx';

import Partner from 'components/Partner/Partner';

import { IPartners } from 'interfaces/partners';

import classes from './Partners.module.scss';

const PartnerSection = ({ partners = [], partnersTitle, title }: any) => {
  return (
    <section className={classes.partners__section}>
      <div className={classes.partners__section__title}>{title}</div>
      <div
        className={clsx({
          [classes.partners__section__wrapp]: true,
          [classes.general]: partnersTitle == 'general'
        })}
      >
        {partners.map((partner: IPartners) => {
          if (partnersTitle.includes(partner.type)) {
            return <Partner key={partner.id} partner={partner} />;
          }
        })}
      </div>
    </section>
  );
};
export default PartnerSection;
