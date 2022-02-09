import React from 'react';
import { ProductsData } from '../components/data/ProductsData';
import Image from 'next/image';
import styles from '../styles/Product.module.css';

const Products = ({heading}) => {
    const products = ProductsData
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
      </section>
  );
};

export default Products;

// import React from 'react';
// import { commerce } from '../lib/commerce';
// import CommerceList from '../components/commerce/CommerceList';
 
// export async function getStaticProps() {
//     const {data: products} = await commerce.products.list()

//     return{
//         props: {
//             products,
//         },
//     }
// }

// const Menu = ({products}) => {
//     return(
//         <React.Fragment>
//         <h1>Menu List</h1>
//             <CommerceList products={products} />
//         </React.Fragment>
//     )
// }

// export default Menu;