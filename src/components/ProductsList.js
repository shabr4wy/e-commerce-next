/** @format */

import Link from "next/link";

const ProductsList = ({ productsData }) => {
  return (
    <main>
      <ul>
        {productsData?.map((product) => (
          <li key={product.title}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsList;
