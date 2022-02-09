import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Hero.module.css';

const Hero = () => {
  return (
      <section className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.miniHero}>
            😎EASY WAY TO ORDER YOUR FOOD
            </div>
            <div className={styles.heroMessage}>
            Order Tasty & <br/> Fresh Food Anytime
            </div>
            <div className={styles.heroText}>
            Just confirm your order and enjoy our delicious fastest delivery
            </div>
            <div className={styles.buttons}>
              <button className={styles.button}><Link href="tel:2349077633154">
              <a>Call Now</a>
              </Link></button>
              <button className={styles.button}><Link href="/menu">
              <a>See Menu</a>
              </Link></button>
            </div>
          </div>
      </section>
  );
};

export default Hero;
