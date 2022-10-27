import React from 'react';

import { Layout, Page404 } from '../components';

const PageNotFound = () => {
  return (
    <Layout page="error404">
      <section>
        <div className="container">
          <Page404 />
        </div>
      </section>
    </Layout>
  );
};

export default PageNotFound;
