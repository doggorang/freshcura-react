import * as React from 'react';
import Header from '../../modules/views/header';
import Footer from '../../modules/views/footer';
import withRoot from '../../modules/withRoot';
import ProductHero from '../../modules/views/ProductHero';
import ProductList from '../../modules/views/ProductList';

function Index() {
  return (
    <React.Fragment>
      <Header />
      <ProductHero headTitle='Our Products' bodyTitle='A VARIETY OF GREAT DISHES' />
      <ProductList />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);