import { useState, useEffect } from 'react';
import useFetch from 'react-fetch-hook';
import { toast } from 'react-toastify';
import { Layout, Seo, Spinner, ContentBlock } from '../components';

const ADMIN_URL = 'https://admin.fixcrewappliance.com/wp-json/wp/v2';

const TermsOfUse = () => {
  const [pageData, setPageData] = useState();

  const { isLoading, data, error } = useFetch(`${ADMIN_URL}/policy?slug=terms-of-use`);

  useEffect(() => {
    if (data) {
      setPageData(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (error) toast.error('Data loading error. Please reload the page!');
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <Layout>
      <Seo />
      <section>
        <ContentBlock title={pageData?.title.rendered} content={pageData?.content.rendered} />
      </section>
    </Layout>
  );
};

export default TermsOfUse;
