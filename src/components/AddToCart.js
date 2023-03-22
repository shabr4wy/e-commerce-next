/** @format */

const AddToCart = ({ product, updateCart }) => {
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
