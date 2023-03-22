/** @format */

import { useState } from "react";

const ItemsNumbers = ({ itemsNumber, setItemsNumber }) => {
  const handleChange = (e) => {
    setItemsNumber(e.target.value);
  };

  const increaseItems = () => {
    setItemsNumber((itemsNumber) => itemsNumber + 1);
  };

  const decreaseItems = () => {
    itemsNumber > 0 && setItemsNumber((itemsNumber) => itemsNumber - 1);
  };

  return (
    <section className="product__quantity">
      <label htmlFor="productQuantity">quantity</label>

      <section>
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
    </section>
  );
};

export default ItemsNumbers;
