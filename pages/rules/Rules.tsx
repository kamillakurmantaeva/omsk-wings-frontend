import React, { ReactElement } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { InferGetServerSidePropsType } from 'next';
import { getServerSideProps } from '.';

// Components
import Layout from 'components/Layout';

// Styles
import styles from './Rules.module.scss';

const Rules = ({
  rules = []
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement => {
  return (
    <Layout title="Rules">
      <div className={styles.container}>
        <h1>Правила посещения</h1>
        <Link href="">
          <a
            className={styles.link}
            href="http://134.122.89.202/media/pravila_povedenia_zriteley.pdf"
            download="pravila_povedenia_zriteley"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Правила поведения зрителей при проведении официальных спортивных
            мероприятий
          </a>
        </Link>
        <div className={styles.rules}>
          <div className={styles.wrapper}>
            {rules.map(({ id, icon, title, text }) =>
              id % 2 !== 0 ? (
                <div key={id} className={styles.content}>
                  <input
                    className={styles.nav}
                    type="checkbox"
                    id={`nav${id}`}
                  />
                  <label className={styles.plank} htmlFor={`nav${id}`}>
                    <i className={`icon-${icon}`} />
                    <p className={styles.title}>{title}</p>
                    <div className={styles.icon}>
                      <i className="icon-mini-arrow-down" />
                    </div>
                  </label>
                  <div className={clsx(styles.text, styles.enabled)}>
                    <p>{text}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className={styles.wrapper}>
            {rules.map(({ id, icon, title, text }) =>
              id % 2 === 0 ? (
                <div key={id} className={styles.content}>
                  <input
                    className={styles.nav}
                    type="checkbox"
                    id={`nav${id}`}
                  />
                  <label className={styles.plank} htmlFor={`nav${id}`}>
                    <i className={`icon-${icon}`} />
                    <p className={styles.title}>{title}</p>
                    <div className={styles.icon}>
                      <i className="icon-mini-arrow-down" />
                    </div>
                  </label>
                  <div className={clsx(styles.text, styles.enabled)}>
                    <p>{text}</p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;
