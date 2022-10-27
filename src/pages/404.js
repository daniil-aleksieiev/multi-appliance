import { Layout, Page404 } from '../components';

const PageNotFound = () => (
  <Layout page="error404">
    <section>
      <div className="container">
        <Page404 />
      </div>
    </section>
  </Layout>
);

export default PageNotFound;
