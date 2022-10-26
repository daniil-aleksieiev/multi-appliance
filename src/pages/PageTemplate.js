import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import { toast } from 'react-toastify';

import { Layout, Seo, Spinner } from '../components';
// import {} from '../sections';

const ADMIN_URL = '';

const PageTemplate = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = React.useState();

  const { isLoading, data, error } = useFetch(`${ADMIN_URL}/pages?slug=${slug}`);

  React.useEffect(() => {
    if (data) {
      setPageData(data[0]);
    }
  }, [data]);

  React.useEffect(() => {
    if (error) toast.error('Data loading error. Please reload the page!');
  }, [error]);

  if (isLoading) return <Spinner />;

  return (
    <Layout pageId={pageData?.slug}>
      <Seo data={pageData?.yoast_head_json} />

      <section style={{ height: 300 }} />
    </Layout>
  );
};

export default PageTemplate;
