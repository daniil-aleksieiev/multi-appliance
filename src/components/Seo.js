import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ data }) => {
  return (
    <Helmet>
      <title>{data?.title}</title>
      <meta name="description" content={data?.description} />
      <meta property="og:title" content={data?.og_title} />
      <meta property="og:type" content={data?.og_type} />
      <meta property="og:description" content={data?.og_description} />
    </Helmet>
  );
};

export default Seo;
