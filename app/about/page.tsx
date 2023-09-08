import * as React from 'react';
import Header from '../../modules/views/Header';
import Footer from '../../modules/views/Footer';
import withRoot from '../../modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <Header />
      <h1>About!</h1>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);