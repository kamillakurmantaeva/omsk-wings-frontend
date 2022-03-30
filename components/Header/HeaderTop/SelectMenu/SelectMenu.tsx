import React from 'react';

import classes from './SelectMenu.module.scss';

interface IProps {
  title: string;
}

const SelectMenu = ({ title }: IProps): JSX.Element => {
  return (
    <div className={classes.select}>
      <div className={classes.select__title}>{title}</div>
    </div>
  );
};

export default SelectMenu;
