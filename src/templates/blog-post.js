import React, { Component } from 'react';
import Helmet from 'react-helmet';

import Heading from '../components/Heading';

import { prettyDate } from '../shared/prettyDate';

class BlogPostTempalte extends Component {
  render() {
    const post = this.props.data.markdownRemark;
    const { frontmatter, html } = post;
    const { date, description, title, path } = frontmatter;
    const image = frontmatter.image.childImageSharp.sizes.src;
    const blogDate = prettyDate(date);

    return (
      <main>
        <Helmet
          title={`${title} | Michael J. Deeb`}
          meta={[
            { name: 'description', content: description },
            { property: 'og:description', content: description },
            { property: 'og:image', content: `https://michaeljdeeb.com${image}` },
            { property: 'og:site_name', content: 'michaeljdeeb.com' },
            { property: 'og:title', content: title },
            { property: 'og:type', content: 'article' },
            { property: 'og:url', content: `https://michaeljdeeb.com${path}` },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@michaeljdeeb' },
          ]}
        />
        <Heading heading={title} sub={blogDate} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    );
  }
}

export default BlogPostTempalte;

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        description
        path
        title
        image {
          childImageSharp {
            sizes {
              src
            }
          }
        }
      }
    }
  }
`;
