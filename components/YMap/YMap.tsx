import React, { ReactElement, useState } from 'react';
import {
  Map,
  Placemark,
  RouteButton,
  YMaps,
  ZoomControl
} from 'react-yandex-maps';

// Interfaces
interface Props {
  style?: object;
}

interface IYmaps {
  templateLayoutFactory?: { createClass: (value?: string) => {} } | any;
}

// Styles
import styles from './YMap.module.scss';

const YMap = ({ style }: Props): ReactElement => {
  const [ymaps, setYmaps] = useState<IYmaps | null>(null);

  const getLayout = () => {
    if (ymaps) {
      const Layout = ymaps.templateLayoutFactory.createClass(
        `<div style="width: max-content; height: max-content; background: #FFFFFFF1; border-radius: 7px; text-align: left; padding: 4px;">
          <div style="font-weight: bold;">$[properties.iconContent]</div>
          <div style="display: flex; color: #808080; font-size: 12px;">
            <div style="margin-right: 6px;">Закрыто до завтра</div>
            <div style="font-weight: bold;">
              <svg
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlSpace="preserve"
              >
                <g id="Layer_1">
                  <title>Layer 1</title>
                  <path
                    stroke="null"
                    strokeWidth="0"
                    id="svg_2"
                    d="m0.24356,3.79392l3.1242,-0.67995l1.66302,-2.79431l1.58187,2.71007l3.20535,0.76419l-2.167,2.28347l0.33846,3.33798l-2.92193,-1.39379l-2.99544,1.39379l0.32155,-3.32725l-2.15009,-2.29421z"
                    fill="#808080"
                  />
                </g>
              </svg>
              5,0
            </div>
          </div>
        </div>`
      );
      return Layout;
    }
    return null;
  };

  return (
    <div className={styles.ymaps_layers_pane}>
      <YMaps query={{ apikey: '57654466-5996-454e-9ac4-f07a7ff52360' }}>
        <Map
          defaultState={{
            center: [55.01871, 73.30591],
            zoom: 14,
            behaviors: [
              "disable('scrollZoom')",
              'drag',
              'dblClickZoom',
              'multiTouch'
            ]
          }}
          options={{
            suppressMapOpenBlock: true,
            minZoom: 2
          }}
          style={style}
          onLoad={(ymaps) => setYmaps(ymaps)}
          modules={[
            'templateLayoutFactory',
            'layout.ImageWithContent',
            'geolocation',
            'geocode'
          ]}
        >
          <RouteButton options={{ float: 'left' }} />
          <ZoomControl options={{ size: 'small' }} />
          <Placemark
            geometry={[55.01871, 73.30591]}
            properties={{
              iconContent: 'Авангард'
            }}
            options={{
              iconLayout: 'default#imageWithContent',
              iconImageHref: '/images/arena_tag.svg',
              iconImageSize: [55, 55],
              iconImageOffset: [-22, -50],
              iconContentOffset: [55, 4],
              iconContentLayout: getLayout()
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default YMap;
