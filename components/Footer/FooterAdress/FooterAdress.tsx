import React from 'react';
import Image from 'next/image';

import classes from './FooterAdress.module.scss';

const FooterAdress = () => {
  return (
    <div className={classes.footer__adress}>
      <div className={classes.footer__container}>
        <div className={classes.footer__wrap}>
          <div className={classes.footer__logo}>
            <div className={classes.footer__logo__img}>
              <Image
                src={`/images/header/logo-head.svg`}
                width={73}
                height={40}
                alt=""
              />
            </div>
            <div className={classes.footer__logo__text}>
              <Image
                src={`/images/header/logo-title-white.svg`}
                width={116}
                height={36}
                alt="Омские ястребы"
              />
            </div>
          </div>
          <div className={classes.footer__ticket}>
            <i className="icon-ticket1" />
            <p>Купить билеты</p>
          </div>
        </div>
        <div className={classes.footer__email}>welcome@hc-avangard.com</div>
      </div>
    </div>
  );
};

export default FooterAdress;
