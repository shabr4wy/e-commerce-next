/** @format */
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <article>
      <Link href={`/products/${product?.id}`}>
        <div>
          {
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product?.thumbnail}
              alt={product?.description}
              loading="lazy"
            />
          }
        </div>
      </Link>

      <Link href={`/products/${product?.id}`}>
        <div>{product?.title}</div>
      </Link>

      <Link href={`/products/${product?.id}`}>
        <div>{product?.price}</div>
      </Link>
    </article>
  );
};

export default ProductItem;
