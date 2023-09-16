import * as React from 'react';
import Header from '../modules/views/header';
import Footer from '../modules/views/footer';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import withRoot from '../modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <Header />
      <ProductHero />
      <ProductValues />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);