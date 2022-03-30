import React, { ReactElement, useState } from 'react';
import { InferGetServerSidePropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';
import clsx from 'clsx';
import { getServerSideProps } from '.';

// Components
import Layout from 'components/Layout';

// Styles
import styles from './Fanclub.module.scss';

const PURCHASES = [
  {
    key: 1,
    src: `/images/fanclub_assets/purchase_scarf.png`,
    name: 'Шарф Ice Hockey Club',
    price: '500'
  },
  {
    key: 2,
    src: `/images/fanclub_assets/purchase_t-shirt.png`,
    name: 'Футболка черная',
    price: '1 690'
  }
];

const Fanclub = ({
  socialMedias = [],
  countries = [],
  fansPhotos = []
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement => {
  const [switcher, setSwitcher] = useState(true);

  return (
    <Layout title="Fanclub">
      <div className={styles.container}>
        <div className={styles.container__fanClub}>
          <h1>Фан-клуб</h1>
          <h2>Фан-клуб Хоккейного клуба «Авангард»</h2>
          <div className={styles.club}>
            <p>
              <b>«Авангард»</b> является одним из самых популярных хоккейных
              клубов не только нашей страны, но и всей Европы. «Арена Омск» с
              первого года своего открытия входила в число самых посещаемых
              дворцов континента, а на выездные матчи «Авангарда» приезжает
              такое количество людей в красно-бело-черных свитерах, что зачастую
              перекрикивает домашний сектор. Этот статус «ястребы» получили
              только благодаря вам – <b>верным болельщикам</b>, которые остаются
              с командой и в часы побед, и в минуты поражений. Нет в России
              такого клуба, за который болели бы так страстно, как за
              «Авангард»!
            </p>
            <div className={styles.hawk}></div>
          </div>
          <div className={styles.socialNetworks}>
            {socialMedias.map(({ id, url, logo, name }) => (
              <a key={id} href={url} target="_blank" rel="nofollow noreferrer">
                <Image src={logo} width={46} height={46} alt={name} />
              </a>
            ))}
          </div>
        </div>
        <hr />
        <div className={styles.container__fanAttributes}>
          <h2>Ценности болельщика и фанатские атрибуты</h2>
          <div className={styles.cards}>
            <div className={styles.cards__wrapp}>
              <i className="icon-flag" />
              <h3>Песни, кричалки, баннеры и флаги</h3>
              <p>
                Это универсальная возможность отреагировать на происходящее на
                ледовом поле и за его пределами. С помощью кричалок мы гоним
                команду к победам.
              </p>
            </div>
            <div className={styles.cards__wrapp}>
              <i className="icon-clothes" />
              <h3>Каждый фанат - в клубных цветах!</h3>
              <p>
                Каждый фанат - в клубных цветах! На матче нужно быть только в
                клубных игровых свитерах, толстовках, бейсболках и шарфах.
              </p>
            </div>
            <div className={styles.cards__wrapp}>
              <i className="icon-fist" />
              <h3>Следи за заводящим на трибуне</h3>
              <p>
                Если ты пришёл на сектор – следи за заводящим на трибуне, своим
                примером он покажет, как правильно надо затягивать ту или иную
                кричалку.
              </p>
            </div>
            <div className={styles.cards__wrapp}>
              <i className="icon-clap" />
              <h3>Не жалей ладоши, хлопай громче</h3>
              <p>
                Ритм на секторе задают барабаны, если каждый из вас поддержит
                ритм хлопками ладоней – будет только лучше! Не жалей ладоши!
              </p>
            </div>
            <div className={styles.cards__wrapp}>
              <i className="icon-team" />
              <h3>Единство на фанатском секторе</h3>
              <p>
                Все мы знаем, что бывает, когда нет единства и слышатся
                нескоординированные заряды. Единство и энергия создают победную
                атмосферу на арене.
              </p>
            </div>
            <div className={styles.cards__wrapp}>
              <i className="icon-medal" />
              <h3>Вместе мы движемся вперед и вместе побеждаем!</h3>
              <p>
                Омская хоккейная школа, молодежная команда, команда мастеров и
                наши болельщики - неделимые части единой семьи «хоккейный клуб
                Авангард».
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.container__fanHistory}>
          <h2>История фан-клуба</h2>
          <div className={styles.history}>
            <p>
              Омское хоккейное фан-движение начало зарождаться{' '}
              <b>зимой 1987 года</b>, после постройки СКК «Иртыш», который
              позднее был переименован в СКК имени Блинова. Молодые люди
              студенческого возраста, собирались в 10 секторе дворца спорта.
              <br />
              <br />
              <b>Весной 1988 года</b> состоялся первый организованный выезд
              фанатов. 10 человек отправились на спаренные матчи переходного
              турнира в соседний Новосибирск. «Авангард» триумфально завершил
              сезон 87-88, получив по его итогам <b>место в первой лиге</b>. Это
              был момент истины, когда в команду поверили все. И главное – 10
              сектор всё больше заполнялся молодежью, активно поддерживающей
              «Авангард». Количество фанатов на домашних матчах доходило до 150
              человек.
              <br />
              <br />
              <b>15 августа 2000 года</b> было принято решение о создании в
              Омске фан-клуба омского «Авангарда» под названием «Bloodyhawks».
              Сегодня фанатов «Авангарда» можно встретить не только по всей
              России, но и по всей Европе, а также за океаном.
            </p>
            <div className={styles.photo}>
              <Image
                src={`/images/fanclub_assets/blinov_tournament.png`}
                width={449}
                height={326}
                alt="Команда"
              />
              <p>«Авангард» — победитель турнира памяти В. Блинова. 1987г.</p>
            </div>
          </div>
        </div>
        <div className={styles.container__fanMap}>
          <h2>География фан-движения ХК «Авангард»</h2>
          <div className={styles.segmented_control}>
            <input
              type="radio"
              name="radio"
              id="tab1"
              className={styles.tab_1}
              onClick={() => setSwitcher(!switcher)}
              checked={switcher}
              readOnly
            />
            <label htmlFor="tab1" className={styles.segmented_control__1}>
              <p>КАРТА</p>
            </label>
            <input
              type="radio"
              name="radio"
              id="tab2"
              className={styles.tab_2}
              onClick={() => setSwitcher(!switcher)}
              checked={!switcher}
              readOnly
            />
            <label htmlFor="tab2" className={styles.segmented_control__2}>
              <p>СПИСОК</p>
            </label>
            <div className={styles.segmented_control__color}></div>
          </div>
          <div
            className={clsx(styles.ymaps_layers_pane, {
              [styles.inactive]: !switcher
            })}
          >
            <YMaps>
              <Map
                defaultState={{
                  center: [52.111973, 31.781701],
                  zoom: 4,
                  behaviors: [
                    "disable('scrollZoom')",
                    'drag',
                    'dblClickZoom',
                    'multiTouch'
                  ]
                }}
                options={{
                  suppressMapOpenBlock: true,
                  maxZoom: 10,
                  minZoom: 2
                }}
              >
                <ZoomControl options={{ size: 'small' }} />
                {countries.map(({ cities }) =>
                  cities.map(({ id, lat, lon }) => (
                    <Placemark
                      key={id}
                      geometry={[lat, lon]}
                      options={{
                        iconLayout: 'default#image',
                        iconImageHref: '/images/fanclub_assets/gps.svg',
                        iconImageOffset: [-16.5, -50]
                      }}
                    />
                  ))
                )}
              </Map>
            </YMaps>
          </div>
          <div className={clsx(styles.list, { [styles.inactive]: switcher })}>
            {countries.map(({ id, country, cities }) => (
              <div key={id} className={styles.country}>
                <div className={styles.country__1}>{country}</div>
                {cities.map(({ id, city }) => (
                  <div key={id} className={styles.city}>
                    {city}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.container__fanPhotos}>
          <h2>Наши болельщики</h2>
          <div className={styles.fansPhotos}>
            {fansPhotos.map(({ media_files }) =>
              media_files.map(({ id, file_url }) => (
                <Image
                  key={id}
                  src={file_url}
                  alt="Фото болельщиков"
                  width={770}
                  height={529}
                />
              ))
            )}
          </div>
        </div>
        <div className={styles.container__fanInteraction}>
          <div className={styles.description}>
            <h2>В клубе создана система работы с болельщиками</h2>
            <p>
              Работу с болельщиками возглавляет менеджер по взаимодействию с
              болельщиками <b>Константин Ященко</b>. К нему вы можете обратиться
              по всем вопросам, связанным с жизнью болельщиков «Авангарда», а
              также с вопросами относительно бронирования билетов на выездные
              матчи нашей команды.
            </p>
            <div className={styles.communication}>
              <div className={styles.manager}>
                <p>менеджер по взаимодействию с болельщиками</p>
                <p>Константин Ященко</p>
                <p>
                  yashchenko.kv@hc-avangard.com
                  <br />
                  +7 (913) 142-45-56
                </p>
              </div>
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
          <div className={styles.shop}>
            {PURCHASES.map(({ key, src, name, price }) => (
              <div key={key} className={styles.product}>
                <Image src={src} width={183} height={200} alt="Фото" />
                <p>{name}</p>
                <p>{price} ₽</p>
                <button>КУПИТЬ</button>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.container__fanForm}>
          <div className={styles.form}>
            <form>
              <Image
                src={`/images/fanclub_assets/ivanov.png`}
                width={260}
                height={227}
                alt=""
              />
              <div className={styles.form_main}>
                <div>Любимая форма с вашей фамилией!</div>
                <div className={styles.form_wrap}>
                  <select name="type" id="type">
                    <option value="1">Свитер</option>
                    <option value="2">Футболка</option>
                  </select>
                  <input
                    className={styles.input}
                    type="name"
                    placeholder="Введите имя"
                  />
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Введите номер"
                  />
                  <select name="size" id="size">
                    <option value="1">Размер</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                  </select>
                  <div className={styles.giftwrap}>
                    <input type="checkbox" id="giftwrap" />
                    <label htmlFor="giftwrap">Подарочная упаковка</label>
                  </div>
                </div>
                <div className={styles.button}>
                  <label className={styles.total} htmlFor="">
                    Итого: <b>1 999 ₽</b>
                  </label>
                  <button onClick={(e) => e.preventDefault()}>ЗАКАЗАТЬ</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fanclub;
