import React, { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import Layout from 'components/Layout';
import YMap from 'components/YMap';

// Styles
import styles from './Arena.module.scss';

const Arena = (): ReactElement => {
  return (
    <Layout title="Arena">
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.photo}>
            <h1>Арена</h1>
            <div>
              <Image
                src={`/images/arena_assets/academy.png`}
                width={1160}
                height={390}
                alt="Фото"
              />
            </div>
            <div className={styles.facts}>
              <div className={styles.card}>
                <i className="icon-arena" />
                <p>Хоккейная академия «Авангард»</p>
              </div>
              <div className={styles.card}>
                <i className="icon-location" />
                <p>г. Омск, пр. Мира, 1Б, 644008</p>
              </div>
              <div className={styles.card}>
                <i className="icon-people" />
                <p>5500 ЗРИТЕЛЕЙ</p>
              </div>
              <div className={styles.card}>
                <i className="icon-square" />
                <p>29 487 кв.м.</p>
              </div>
            </div>
          </div>
          <div className={styles.about}>
            <h2>Об арене</h2>
            <div className={styles.text}>
              <p>
                Центральный спортивный комплекс Хоккейной академии «Авангард»
                введен в эксплуатацию во втором полугодии 2019-го.
                <br />В состав комплекса входит Ледовый дворец вместимостью{' '}
                <b>1200 зрителей</b> и общежитие для иногородних воспитанников.
                Спортивный комплекс построен на средства группы компаний
                «Газпром» в рамках программы «Газпром – детям».
              </p>
              <p>
                Во дворце <b>две арены</b> – основная, по стандартам
                Международной федерации хоккея (IIHF), и тренировочная, а также
                медицинский центр, семь спортивных залов, тренажерный зал,
                пресс-центр. Ледовый дворец соединен теплым переходом с
                общежитием на <b>160 мест</b> для иногородних воспитанников, где
                предусмотрены учебные классы, восстановительный центр, столовая.
              </p>
            </div>
            <div className={styles.regulations}>
              <i className="icon-pdf" />
              <Link href="">
                <a
                  href="http://134.122.89.202/media/pravila_povedenia_zriteley.pdf"
                  download="pravila_povedenia_zriteley"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  Правила поведения зрителей при проведении официальных
                  спортивных мероприятий
                </a>
              </Link>
            </div>
          </div>
          <div className={styles.map}>
            <h2>Схема проезда</h2>
            <div className={styles.ymaps}>
              <YMap style={{ borderRadius: '20px' }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Arena;
