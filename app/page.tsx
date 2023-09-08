import * as React from 'react';
import Header from '../modules/views/Header';
import Footer from '../modules/views/Footer';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductCategories from '../modules/views/ProductCategories';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import withRoot from '../modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <Header />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);