import React from 'react';

import styles from './index.module.css';
import selfie from './selfie.jpg';

const Biography = () => (
  <div className={styles.Biography}>
    <div className={styles.welcome}>
      <img className={styles.selfie} src={selfie} alt="Michael Deeb at Twin Peaks" />
      <span className={styles.greeting}>Hi!</span>
    </div>
    <div className={styles.welcomeDetail}>
      <p>
        My name is Michael Deeb and I&apos;m a web developer in San Francisco, CA.
      </p>
      <p>
        Over the years, this website has provided me with a personal project/playground to try out various web technologies (currently <a href="https://reactjs.org">React</a>)
      </p>
      <p>
        Most of what I write here is to try and help my future self remember how a particular problem was solved or how something works. There is an added bonus that what I write here may help someone else solve a similar problem.
      </p>
      <p>
        My first experience with web development was designing a single page for a video game, which I did in Internet Explorer. I was so happy with what I had come up with and tried to show my friend on his Mac and that&apos;s when I discovered cross-browser compatibility.
      </p>
    </div>
  </div>
);

export default Biography;
