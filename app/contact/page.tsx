import * as React from 'react';
import Header from '../../modules/views/header';
import Footer from '../../modules/views/footer';
import ProductHero from '../../modules/views/ProductHero';
import ProductCTA from '../../modules/views/ProductCTA';
import ProductSmokingHero from '../../modules/views/ProductSmokingHero';
import withRoot from '../../modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <Header />
      <ProductHero />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);