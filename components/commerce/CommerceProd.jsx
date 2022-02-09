 import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';

const CommerceProd = ({...product}) => {
  return (
    <div className={styles.productWrapper}>
    <div className={styles.commerceCard} key={product.key}>
                  <div className={styles.productImg}>
                  <Image src={product.image.url}
                   alt={product.name}
                   width="300" 
                   height="300" />
                   </div>
                   <div className={styles.productInfo}>
                       <div className={styles.productName}>{product.name}</div>
                       <div className={styles.price}>{product.price.formatted_with_symbol}</div>
                       {/* <button className={styles.productButton}>{product.button}</button> */}
                   </div>
                   </div>
                   </div>
                   
  );
};

export default CommerceProd;