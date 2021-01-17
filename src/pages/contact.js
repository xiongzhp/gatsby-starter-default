import React from 'react';
import Helmet from 'react-helmet';

import Heading from '../components/Heading';
import Socials from '../components/Socials';
import NetlifyForm from '../components/NetlifyForm';

const ContactPage = () => (
  <main>
    <Helmet title="Contact | Michael J. Deeb" />
    <Heading heading="Let&apos;s Talk!" sub="Message | Socialize | Mail" />
    <Socials />
    <NetlifyForm />
  </main>
);

export default ContactPage;
