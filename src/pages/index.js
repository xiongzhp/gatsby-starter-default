import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Heading from '../components/Heading';
import Biography from '../components/Biography';
import RecentPosts from '../components/RecentPosts';

const IndexPage = (props) => {
  const { edges } = props.data.allMarkdownRemark;

  return (
    <main>
      <Helmet title="Home | Michael J. Deeb" />
      <Heading heading="Home" sub="Start | Meet | Embark" />
      <Biography />
      <RecentPosts edges={edges} />
    </main>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 350)
          frontmatter {
            date
            path
            title
          }
        }
      }
    }
  }
`;
