import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { prettyDate } from '../../shared/prettyDate';
import Heading from '../../components/Heading';

import styles from './index.module.css';

class BlogIndex extends Component {
  render() {
    const { edges } = this.props.data.allMarkdownRemark;

    return (
      <div>
        <Helmet title="Blog | Michael J. Deeb" />
        <Heading heading="Blog" sub="Learn | Document | Teach" />
        <ol className={styles.posts}>
          {
            edges.map((edge) => {
              const { frontmatter, html, id } = edge.node;
              const { date, path, title } = frontmatter;
              return (
                <li className={styles.post} key={id}>
                  <h3><Link to={path}>{title}</Link></h3>
                  <div>{prettyDate(date)}</div>
                  <article dangerouslySetInnerHTML={{ __html: html }} />
                </li>
              );
            })
          }
        </ol>

      </div>
    );
  }
}

export default BlogIndex;

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
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
