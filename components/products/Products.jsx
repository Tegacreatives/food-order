import React from 'react';
import { ProductsData2 } from '../data/ProductsData';
import Image from 'next/image';
import styles from '../../styles/Product.module.css';
import Link from 'next/link';

const Products = ({heading}) => {
    const products = ProductsData2
  return (
      <section className={styles.productContainer}>
      <h1 className={styles.productHeading}>{heading}</h1>
      <div className={styles.productWrapper}>
          {products.map((product) => {
              return(
                  <div className={styles.productCard} key={product.key}>
                  <div className={styles.productImg}>
                  <Image src={product.img}
                   alt={product.alt}
                   width="300px" 
                   height="300px" />
                   </div>
                   <div className={styles.productInfo}>
                       <div className={styles.productName}>{product.name}</div>
                       <div className={styles.price}>{product.price}</div>
                       <button className={styles.productButton}>{product.button}</button>
                   </div>
                   </div>
              )
          })}
          </div>
          <div className={styles.viewButton}>
          <Link href="/menu">
          <button className={styles.productButton}>😎 View Menu</button>
          </Link>
          </div>
      </section>
  );
};

export default Products;
