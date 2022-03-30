import React from 'react';

// Components
import Layout from 'components/Layout';
import PartnerSection from 'components/PartnerSection/PartnerSection';
import { IPartners } from 'interfaces/partners';
// import Partner from 'components/Partner/Partner';

// Styles
import classes from './Partners.module.scss';

interface IProps {
  partnersGeneral: IPartners[];
  partnersRegular: IPartners[];
  partnersMHL: IPartners[];
}

const Partners = ({
  partnersGeneral = [],
  partnersRegular = [],
  partnersMHL = []
}: IProps) => {
  return (
    <Layout title="Partners">
      <div className={classes.partners}>
        <div className={classes.partners__title}>Спонсоры и партнеры</div>
        <PartnerSection
          partners={partnersGeneral}
          partnersTitle={['general']}
          title="Генеральные партнеры"
        />

        <PartnerSection
          partners={[...partnersRegular, ...partnersMHL]}
          partnersTitle={['regular', 'MHL2019']}
          title="Партнеры"
        />
      </div>
    </Layout>
  );
};

export default Partners;
