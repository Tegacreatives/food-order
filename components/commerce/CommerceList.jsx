import React from 'react';
import Link from 'next/link';
import CommerceProd from './CommerceProd';

const CommerceList = ({products}) => {
    if (!products) return null
  return (
      <div>
          {products.map((product) => (
              <section key={product.id}>
                  <Link href={`/products/${product.premalink}`}>
                      <a>
                          <CommerceProd {...product} />
                      </a>
                  </Link>
              </section>
          ))}
      </div>
  );
};

export default CommerceList;
