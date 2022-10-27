import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const ADMIN_URL = 'https://admin.fixcrewappliance.com/wp-json/wp/v2';

const PageTemplate = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [pageData, setPageData] = useState();

  const { isLoading, data, error } = useFetch(`${ADMIN_URL}/pages?slug=${slug}`);
  const areas = useFetch(`${ADMIN_URL}/page-settings?slug=areas`);
  const settings = useFetch(`${ADMIN_URL}/page-settings?slug=settings`);

  useEffect(() => {
    if (data) {
      setPageData(data[0]);
    }
  }, [data]);

  useEffect(() => {
    if (error) toast.error('Data loading error. Please reload the page!');
  }, [error]);

  useEffect(() => {
    if (
      slug !== 'appliance-repair' &&
      slug !== 'refrigerator-repair' &&
      slug !== 'freezer-repair' &&
      slug !== 'dryer-repair' &&
      slug !== 'washer-repair' &&
      slug !== 'oven-repair' &&
      slug !== 'stove-repair' &&
      slug !== 'dishwasher-repair' &&
      slug !== 'ice-machine-repair' &&
      slug !== 'range-repair'
    ) {
      navigate('/404');
    }
  }, [slug, navigate]);

  if (isLoading || settings.isLoading || areas.isLoading) return <Spinner />;

  return (
    <Layout pageId={pageData?.slug}>
      <Seo data={pageData?.yoast_head_json} />
      <Hero
        title={pageData?.title.rendered}
        phone={settings?.data[0].acf.contacts.phone}
        awards={settings?.data[0].acf.awards}
      />
      <WhyWe title={pageData?.title.rendered} data={settings?.data[0].acf.why_choose_us} />
      <ContactOurSpecialists />
      <PageContent
        title={pageData?.title.rendered}
        content={pageData?.content.rendered}
        image={pageData?.acf.main_image}
      />
      <Satisfaction data={settings?.data[0].acf.satisfaction} />
      <Services />
      <Counter data={settings?.data[0].acf.counter} />
      <Reviews data={pageData?.acf.reviews} />
      <CallToAction title={pageData?.title.rendered} phone={settings?.data[0].acf.contacts.phone} />
      <MakesAndModels data={settings?.data[0].acf.slider} />
      <Areas list={areas?.data[0].acf.areas_list} />
    </Layout>
  );
};

export default PageTemplate;
