import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const Heading = (props) => {
  const { border, children, heading, size, sub } = props;

  let title;
  switch (size) {
    case 1:
      title = <h1 className={styles.title}>{heading}</h1>;
      break;
    case 2:
      title = <h2 className={styles.title}>{heading}</h2>;
      break;
    case 3:
      title = <h3 className={styles.title}>{heading}</h3>;
      break;
    case 4:
      title = <h4 className={styles.title}>{heading}</h4>;
      break;
    case 5:
      title = <h5 className={styles.title}>{heading}</h5>;
      break;
    case 6:
      title = <h6 className={styles.title}>{heading}</h6>;
      break;
    default:
      title = <h1 className={styles.title}>{heading}</h1>;
      break;
  }

  return (
    <header className={border ? styles.bordered : styles.Heading}>
      {title}
      <div className={styles.sub}>{sub || children}</div>
    </header>
  );
};

Heading.defaultProps = {
  border: true,
  size: 1,
  sub: '',
};

Heading.propTypes = {
  border: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  size: PropTypes.number,
  sub: PropTypes.string,
};

export default Heading;
