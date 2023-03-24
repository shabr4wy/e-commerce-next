/** @format */

import { useContext } from "react";
import { CartContext, ItemsNumberContext } from "@/pages/_app";

const AddToCart = ({ product }) => {
  const { cart, updateCart } = useContext(CartContext);
  const { itemsNumber } = useContext(ItemsNumberContext);

  const check_If_Product_exists = () => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == product.id) {
        return true;
      }
    }
    return false;
  };

  const handleClick = () => {
    !check_If_Product_exists() &&
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
