/** @format */

import Nav from "@/components/Nav";

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

  return data;
};

export async function getStaticProps(context) {
  const categoriesProductsData = await getCategoriesProductData(context);
  const categoriesNames = await getCategoriesNames();

  return { props: { categoriesProductsData, categoriesNames } };
}

const CategoryProducts = ({ categoriesProductsData, categoriesNames }) => {
  return (
    <main>
      <Nav categoriesNames={categoriesNames} />
      <ul>
        {categoriesProductsData?.products.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default CategoryProducts;
