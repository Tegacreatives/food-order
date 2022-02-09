import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (
      <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <Link href="/">
              <a>
                Tega Foods
              </a>
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <div className={styles.socialLink}><Link href="https://facebook.com">
              <a target= "_blank">Facebook</a>
            </Link></div>
            <div className={styles.socialLink}><Link href="https://twitter.com">
              <a target= "_blank">Twitter</a>
            </Link></div>
            <div className={styles.socialLink}><Link href="https://instagram.com">
              <a target= "_blank">Instagram</a>
            </Link></div>
          </div>
          </div>
          <div className={styles.footerBottom}>
            <p>Copyright @ Tega Okorare</p>
          </div>
      </div>
  );
};

export default Footer;
