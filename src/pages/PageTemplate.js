import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import { toast } from 'react-toastify';

import { Layout, Seo, Spinner } from '../components';
import {
  Hero,
  WhyWe,
  ContactOurSpecialists,
  PageContent,
  Satisfaction,
  Services,
  Counter,
  Reviews,
  CallToAction,
  MakesAndModels,
  Areas,
} from '../sections';

const ADMIN_URL = '';

const PageTemplate = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState();

  const { isLoading, data, error } = useFetch(`${ADMIN_URL}/pages?slug=${slug}`);

  useEffect(() => {
    if (data) {
      setPageData(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (error) toast.error('Data loading error. Please reload the page!');
  }, [error]);

  // TODO: Add check for SLUG, if not, then redirect to 404

  if (isLoading) return <Spinner />;

  return (
    <Layout pageId={pageData?.slug}>
      <Seo data={pageData?.yoast_head_json} />
      <Hero title={pageData?.title.rendered} />
      <WhyWe title={pageData?.title.rendered} />
      <ContactOurSpecialists />
      <PageContent
        title={pageData?.title.rendered}
        content={pageData?.content.rendered}
        image={pageData?.acf.main_image}
      />
      <Satisfaction />
      <Services />
      <Counter />
      <Reviews />
      <CallToAction />
      <MakesAndModels />
      <Areas />
    </Layout>
  );
};

export default PageTemplate;
