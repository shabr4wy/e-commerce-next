/** @format */

import { useState } from "react";
import AddToCart from "./AddToCart";
import ItemsNumbers from "./itemsNumber";
import Rating from "./Rating";

const ProductPage = ({ productData }) => {
  const [itemsNumber, setItemsNumber] = useState(0);

  return (
    <main className="product__page">
      <section className="product__images">
        {productData?.images?.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={productData?.description} key={image} />
        ))}
      </section>

      <section className="product__title">
        <h3>{productData?.title}</h3>
      </section>

      <section>Brand: {productData?.brand}</section>

      <section className="product__rating">
        <Rating product={productData} />
      </section>

      <section className="product__description">
        <p>{productData?.description}</p>
      </section>

      <section className="product__price">
        <span>{"$" + productData?.price}</span>
      </section>

      <ItemsNumbers itemsNumber={itemsNumber} setItemsNumber={setItemsNumber} />

      <AddToCart product={productData} itemsNumber={itemsNumber} />
    </main>
  );
};

export default ProductPage;
