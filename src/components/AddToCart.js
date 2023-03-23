/** @format */

import { useContext } from "react";
import { CartContext, ItemsNumberContext } from "@/pages/_app";

const AddToCart = ({ product }) => {
  const { updateCart } = useContext(CartContext);
  const { itemsNumber } = useContext(ItemsNumberContext);

  const handleClick = () => {
    updateCart({ ...product, itemsBeingPurshased: itemsNumber });
  };

  return (
    <section>
      <button className="product__addToCartBtn" onClick={() => handleClick()}>
        Add to cart
      </button>
    </section>
  );
};

export default AddToCart;
