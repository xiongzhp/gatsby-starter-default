import React from 'react';
import Link from 'gatsby-link';

import styles from './index.module.css';

const Navigation = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <Link to="/" exact className={styles.logo}>michaeljdeeb.com</Link>
      <nav className={styles.nav}>
        <Link to="/" exact className={styles.link}>Home</Link>
        <Link to="/blog/" className={styles.link}>Blog</Link>
        <Link to="/contact/" className={styles.link}>Contact</Link>
      </nav>
    </div>
  </header>
);

export default Navigation;
