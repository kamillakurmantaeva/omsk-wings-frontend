import React, { ReactElement } from 'react';
import { observer } from 'mobx-react';

// Stores
import pageLoaderStore from 'stores/PageLoaderStore';

import classes from './PageLoader.module.scss';

const PageLoader = (): ReactElement | null => {
  const { loading } = pageLoaderStore;

  if (!loading) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.loader}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default observer(PageLoader);
