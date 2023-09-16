import * as React from 'react';
import Header from '../../modules/views/header';
import Footer from '../../modules/views/footer';
import withRoot from '../../modules/withRoot';
import ProductHero from '../../modules/views/ProductHero';
import ProductCategories from '../../modules/views/ProductCategories';

function Index() {
  return (
    <React.Fragment>
      <Header />
      <ProductHero />
      <ProductCategories />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);