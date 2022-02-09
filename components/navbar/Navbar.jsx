import styles from "../../styles/Navbar.module.css";
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  return (
      <div className={styles.container}>
          <div className={styles.item}>
              <div className={styles.callButton}>
                  <Image
                   src="/img/telephone.png"
                    alt=""
                    width="32"
                    height="32" />
              </div>
              <div className={styles.texts}>
              <div className={styles.text}><Link href="tel:2349077633145">
              <a>ORDER NOW</a>
              </Link></div>
              <div className={styles.text}><Link href="tel:2349077633145">
              <a>234 805 477 8290</a>
              </Link></div>

              </div>
          </div>
          <div className={styles.item}>
              <ul className={styles.list}>
                  <li className={styles.listItem}><Link href="/">
                  <a>Home</a>
                  </Link></li>
                  <li className={styles.listItem}><Link href="/menu">
                  <a>Menu</a>
                  </Link></li>
                  <li className={styles.listItem}><Link href="/about">
                  <a>About</a>
                  </Link></li>
                  <li className={styles.listItem}>Contact</li>
              </ul>
          </div>
          <div className={styles.item}>
              <div className={styles.cart}>
                  <Image
                   src="/img/cart.png"
                   alt=""
                   width="30px"
                   height="30px"
                   />
                   <div className={styles.counter}>2</div>
              </div>       
          </div>
      </div>
  );
};

export default Navbar;
