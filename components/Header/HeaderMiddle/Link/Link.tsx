import classes from './Link.module.scss';

const Link = ({ title, icon }: any) => {
  return (
    <div className={classes.header__middle__link}>
      <div className={classes.header__middle__icon}>
        <i className={`icon-${icon}`} />
      </div>
      <div className={classes.header__middle__title}>{title}</div>
    </div>
  );
};
export default Link;
