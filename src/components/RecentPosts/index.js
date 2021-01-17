import React from 'react';
import Link from 'gatsby-link';

import Heading from '../Heading';

import prettyDate from '../../shared/prettyDate';

import styles from './index.module.css';

const RecentPosts = (props) => {
  const { edges } = props;
  const posts = edges.filter((edge, index) => index < 3);
  return (
    <div>
      <Heading heading="Recent Posts" size={2} border={false}>
        Look for a new post here monthly. If you have something you would like me to write about, <Link to="/contact">let me know</Link>.
      </Heading>
      <ol className={styles.RecentPosts}>
        {
          posts.map((edge) => {
            const { excerpt, frontmatter, id } = edge.node;
            const { date, path, title } = frontmatter;
            return (
              <li key={id}>
                <h3><Link to={path}>{title}</Link></h3>
                <div>{date}</div>
                <p>{excerpt}</p>
              </li>
            );
          })
        }
      </ol>
    </div>
  );
};

export default RecentPosts;
