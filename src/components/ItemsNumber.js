/** @format */

import { useContext } from "react";
import { ItemsNumberContext } from "@/pages/_app";

const ItemsNumber = ({ product }) => {
  const { itemsNumber, setItemsNumber } = useContext(ItemsNumberContext);

  const handleChange = (e) => {
    setItemsNumber(
      e.target.value <= product.stock ? e.target.value : product.stock
    );
  };

  const increaseItems = () => {
    setItemsNumber((itemsNumber) => Number(itemsNumber) + 1);
  };

  const decreaseItems = () => {
    itemsNumber > 1 && setItemsNumber((itemsNumber) => itemsNumber - 1);
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
          min={1}
          max={product.stock}
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

export default ItemsNumber;
