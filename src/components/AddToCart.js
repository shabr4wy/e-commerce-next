/** @format */

import { useContext } from "react";
import { CartContext } from "@/pages/_app";

const AddToCart = ({ product }) => {
  const { updateCart } = useContext(CartContext);

  const handleClick = () => {
    updateCart({ ...product, itemsBeingPurshased: "1" });
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
