/** @format */

import { useState } from "react";
import AddToCart from "./AddToCart";
import Rating from "./Rating";

const ProductPage = ({ productData }) => {
  const [itemsNumber, setItemsNmber] = useState(0);

  const handleChange = (e) => {
    setItemsNmber(e.target.value);
  };

  const increaseItems = () => {
    setItemsNmber((itemsNumber) => itemsNumber + 1);
  };

  const decreaseItems = () => {
    itemsNumber > 0 && setItemsNmber((itemsNumber) => itemsNumber - 1);
  };

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

      <section className="product__quantity">
        <label htmlFor="productQuantity">quantity</label>

        <button
          onClick={() => decreaseItems()}
          className="product__decreseItems"
          aria-labelledby="decrease items quantity by 1"
        >
          -
        </button>

        <input
          type="number"
          id="productQuantity"
          name="productQuantity"
          onChange={(e) => handleChange(e)}
          value={itemsNumber}
        ></input>

        <button
          onClick={() => increaseItems()}
          className="product__increseItems"
          aria-labelledby="increse items quantity by 1"
        >
          +
        </button>
      </section>

      <AddToCart />
    </main>
  );
};

export default ProductPage;
