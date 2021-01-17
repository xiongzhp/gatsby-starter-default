import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Heading from '../components/Heading';

const NotFoundPage = () => (
  <div>
    <Helmet title="Not Found | Michael J. Deeb" />
    <Heading heading="Not Found" sub="404 | Error | Lost" />
    <p>It&apos;s not you, it&apos;s me.</p>
    <p>No, seriously. This is a static site built with <a href="https://www.gatsbyjs.org/">Gatsby</a>. If you followed a link and ended up here I must have made a typo.</p>
    <p><Link to="/contact">Let me know!</Link></p>
  </div>
);

export default NotFoundPage;
