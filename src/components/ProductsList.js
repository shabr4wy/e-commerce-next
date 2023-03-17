/** @format */

import ProductItem from "./Product-item";

const ProductsList = ({ productsData }) => {
  return (
    <main>
      <ul className="products__items">
        {productsData?.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsList;
