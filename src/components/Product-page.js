/** @format */

const ProductPage = ({ productData }) => {
  return (
    <main className="product">
      <section className="product__images">
        {productData?.images?.map((image) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={productData?.description} key={image} />
        ))}
      </section>

      <section className="product__title">
        <h3>{productData?.title}</h3>
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
          className="product__decreseItems"
          aria-labelledby="decrease items quantity by 1"
        >
          -
        </button>

        <input
          type="number"
          id="productQuantity"
          name="productQuantity"
        ></input>

        <button
          className="product__increseItems"
          aria-labelledby="increse items quantity by 1"
        >
          +
        </button>
      </section>

      <section>
        <button className="product__addToCartBtn">Add to cart</button>
      </section>
    </main>
  );
};

export default ProductPage;
