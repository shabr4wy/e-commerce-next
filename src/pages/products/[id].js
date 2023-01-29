/** @format */

export const getAllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const allProducts = data.products;

  return allProducts;
};

const Product = ({ productData }) => {
  return <h1>{productData.title}</h1>;
};

export default Product;
