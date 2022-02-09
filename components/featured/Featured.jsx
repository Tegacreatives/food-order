import React from 'react';
import styles from '../../styles/featured.module.css';

const Featured = () => {
  return (
    <div className={styles.featuredContainer}>
        <h1 className={styles.featuredMessage}>Pie of the day</h1>
        <p className={styles.featuredText}>The best in the house you can find with special toppings</p>
        <button className={styles.featuredButton}>Order Now</button>
    </div>
  )
}

export default Featured;