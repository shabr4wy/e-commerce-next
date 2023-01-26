/** @format */

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  return data.products;
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default function Home() {
  return <h1>Hello World!</h1>;
}
