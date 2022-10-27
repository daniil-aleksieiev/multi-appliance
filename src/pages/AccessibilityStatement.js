import { Layout, Seo, ContentBlock } from '../components';

import { contacts } from '../static/contacts';

const content = `
\n<p>Multi Appliance is committed to accessibility, diversity, and inclusion. In an effort to provide a fully accessible and optimized user experience for all site visitors,&nbsp; Multi Appliance has taken measures to ensure an excellent user experience with visitors using assistive technology.</p>\n\n\n\n<p>To accomplish this, we have and will continue to take steps to improve functionality with assistive technology devices and ensure consistency with the World Wide Web Consortium’s Content Accessibility Guidelines (WCAG 2.0), priority Level AA conformance for website content. Our team employs accessibility and usability tests during regular content reviews to improve the accessibility of our site.</p>\n\n\n\n<p>In addition, we encourage customers and anyone else who visits our website to let us know if there are any problems with accessing any portion of the site. You can reach us as follows:</p>\n\n\n\n<p>Phone: <a href=\"tel:${contacts.phone}\">${contacts.phone}</a></p>\n
`;

const AccessibilityStatement = () => (
  <Layout>
    <Seo />
    <section>
      <ContentBlock title="Accessibility Statement" content={content} />
    </section>
  </Layout>
);

export default AccessibilityStatement;
