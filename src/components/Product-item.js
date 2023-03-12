/** @format */
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  return (
    <article>
      <Link href={`/products/${product?.id}`}>
        <div>
          <Image
            src={product?.thumbnail}
            alt={product?.description}
            width={400}
            height={268}
          />
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
