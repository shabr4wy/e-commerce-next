/** @format */

import ProductItem from "./Product-item";

const ProductsList = ({ productsData, updateCart }) => {
  return (
    <main>
      <ul className="products__items">
        {productsData?.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} updateCart={updateCart} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsList;
