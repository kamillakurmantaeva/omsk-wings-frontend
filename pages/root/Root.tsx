import React, { ReactElement } from 'react';
import Link from 'next/link';

// Styles
import styles from './Root.module.scss';

const RootPage = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Link href="/players">Players</Link>
      <Link href="/fanclub">Fanclub</Link>
      <Link href="/arena">Arena</Link>
      <Link href="/staff">Staff</Link>
      <Link href="/clubcontacts">Club contacts</Link>
      <Link href="/coaches">Coaching staff</Link>
      <Link href="/front-office">Front Office</Link>
      <Link href="/partners">Sponsors and Partners</Link>
      <Link href="/rules">Visiting rules</Link>
    </div>
  );
};

export default RootPage;
