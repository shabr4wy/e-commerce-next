/** @format */

import ProductItem from "@/components/Product-item";

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  return data.products;
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <main className="main">
      <ul className="main__home-products">
        {products.map((product) => (
          <li className="main__product-item">{product.title}</li>
        ))}
      </ul>
    </main>
  );
}
