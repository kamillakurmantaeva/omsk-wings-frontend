import React from 'react';

import Icon from './Icon/Icon';
import Social from './Social/Social';
import SelectMenu from './SelectMenu/SelectMenu';

import classes from './HeaderTop.module.scss';

interface IPropsUrl {
  imageUrl: string[];
}
interface IProps {
  title: string[];
}

const icons: IPropsUrl = {
  imageUrl: [
    '/images/header/khll.svg',
    '/images/header/MKhL.svg',
    '/images/header/vkhl.svg',
    '/images/header/WhKhL.svg'
  ]
};
const socials: IPropsUrl = {
  imageUrl: [
    '/images/header/vk.svg',
    '/images/header/ok.svg',
    '/images/header/inst.svg',
    '/images/header/fb.svg',
    '/images/header/tw.svg',
    '/images/header/youtube.png'
  ]
};
export const selectTitle: IProps = {
  title: ['Команды', 'Сайты']
};

const HeaderTop = () => {
  return (
    <div className={classes.top}>
      <div className={classes.top__container}>
        <div className={classes.top__icons}>
          {icons.imageUrl.map((icon) => (
            <Icon key={icon} imageUrl={icon} />
          ))}
        </div>
        <div className={classes.top__selects}>
          {selectTitle.title.map((title) => (
            <SelectMenu key={title} title={title} />
          ))}
        </div>
        <div className={classes.top__socials}>
          {socials.imageUrl.map((social) => (
            <Social key={social} imageUrl={social} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
