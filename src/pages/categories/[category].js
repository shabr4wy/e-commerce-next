/** @format */

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import ProductsList from "@/components/ProductsList";

export const getCategoriesNames = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const categoriesNames = await res.json();

  return categoriesNames;
};

export const getCategoriesPaths = (categoriesNames) => {
  const paths = categoriesNames.map((categoryName) => {
    return { params: { category: categoryName } };
  });

  return paths;
};

export async function getStaticPaths() {
  const categoriesNames = await getCategoriesNames();
  const paths = await getCategoriesPaths(categoriesNames);

  return { paths, fallback: false };
}

const getCategoriesProductData = async (context) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${context.params.category}`
  );
  const data = await res.json();

  return data.products;
};

export async function getStaticProps(context) {
  const categoriesProductsData = await getCategoriesProductData(context);
  const categoriesNames = await getCategoriesNames();

  return { props: { categoriesProductsData, categoriesNames } };
}

const CategoryProducts = ({ categoriesProductsData, categoriesNames }) => {
  return (
    <>
      <Header />
      <Nav categoriesNames={categoriesNames} />
      <ProductsList productsData={categoriesProductsData} />
    </>
  );
};

export default CategoryProducts;
