/** @format */
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <article className="product__item">
      <section className="item__images">
        <Link href={`/products/${product?.id}`}>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product?.thumbnail}
              alt={product?.description}
              loading="lazy"
            />
          }
        </Link>
      </section>

      <section className="item__title">
        <Link href={`/products/${product?.id}`}>
          <h3>{product?.title}</h3>
        </Link>
      </section>

      <section className="item__price">
        <Link href={`/products/${product?.id}`}>
          <span>{"$" + product?.price}</span>
        </Link>
      </section>

      <section>
        <button className="product__addToCartBtn">Add to cart</button>
      </section>
    </article>
  );
};

export default ProductItem;
