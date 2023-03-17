/** @format */

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import ProductsList from "@/components/ProductsList";

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
      <Header />
      <Nav categoriesNames={categoriesNames} />
      <ProductsList productsData={products} />
    </>
  );
}
