import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/fontawesome-free-brands';

import styles from './index.module.css';

const Socials = () => (
  <div className={styles.Socials}>
    <h3>Social</h3>
    <div className={styles.row}>
      <div className={styles.item}>
        <a href="https://www.linkedin.com/in/michaeljdeeb/">
          <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} size="6x" fixedWidth />
        </a>
        <a href="https://www.linkedin.com/in/michaeljdeeb/">LinkedIn | Michael Deeb</a>
      </div>
      <div className={styles.item}>
        <a href="https://www.github.com/michaeljdeeb">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} size="6x" fixedWidth />
        </a>
        <a href="https://github.com/michaeljdeeb">GitHub | @michaeljdeeb</a>
      </div>
      <div className={styles.item}>
        <a href="https://www.twitter.com/michaeljdeeb">
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} size="6x" fixedWidth />
        </a>
        <a href="https://twitter.com/michaeljdeeb">Twitter | @michaeljdeeb</a>
      </div>
    </div>
    <svg width="0" height="0" style={{ position: 'absolute', zIndex: -1 }}>
      <linearGradient id="brandHover" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#09f', stopOpacity: 1 }} />
        <stop offset="0%" style={{ stopColor: '#2ac9fa', stopOpacity: 1 }} />
      </linearGradient>
    </svg>
  </div>
);

export default Socials;
