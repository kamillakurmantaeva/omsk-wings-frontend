import React, { ReactNode } from 'react';
import Head from 'next/head';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { isMobile, isFirefox } from 'react-device-detect';

// Components
import PageLoader from './PageLoader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
// Interfaces
import { MetaDefinition, SeoConfig } from 'interfaces/seo';

interface IProps extends SeoConfig {
  children?: ReactNode;
}

const Layout = ({ children, title, meta, rewriteTitle }: IProps) => {
  const resultTitle = title + (rewriteTitle ? '' : ` - Avangard`);
  const metaTags: MetaDefinition[] = [];

  metaTags.push({
    itemProp: 'name',
    content: resultTitle
  });

  if (meta) {
    Object.entries(meta).forEach(([name, content]) => {
      switch (name) {
        case 'description':
          metaTags.push({
            name: 'description',
            content: content || ''
          });

          break;
      }
    });
  }

  return (
    <>
      <Head>
        <title>{resultTitle}</title>
        {metaTags.map((meta) => (
          <meta key={meta.name || meta.itemProp} {...meta} />
        ))}
      </Head>
      <PageLoader />
      {isMobile || isFirefox ? (
        <div style={{ overflowY: 'auto' }}>
          <Header />
          {children}
          <Footer />
        </div>
      ) : (
        <PerfectScrollbar>
          <Header />
          {children}
          <Footer />
        </PerfectScrollbar>
      )}
    </>
  );
};

export default Layout;
