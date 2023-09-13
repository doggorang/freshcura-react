import * as React from 'react';
import Header from '../../modules/views/header';
import Footer from '../../modules/views/footer';
import withRoot from '../../modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <Header />
      <h1>Salad!</h1>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);