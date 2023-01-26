/** @format */

import Nav from "@/components/Nav";
import ProductItem from "@/components/Product-item";

export const getCategoriesNames = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categoriesNames = await res.json();

  return categoriesNames;
};

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  return data.products;
};

export async function getStaticProps() {
  const products = await getProducts();
  const categoriesNames = await getCategoriesNames();

  return { props: { products, categoriesNames } };
}

export default function Home({ products, categoriesNames }) {
  return (
    <>
      <Nav categoriesNames={categoriesNames} />
      <main className="main">
        <ul className="main__home-products">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      </main>
    </>
  );
}
