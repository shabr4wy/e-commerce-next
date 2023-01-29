/** @format */

export const getAllProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const allProducts = data.products;

  return allProducts;
};

export const getProductsPaths = (allProducts) => {
  const paths = allProducts.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return paths;
};

export async function getStaticPaths() {
  const allProducts = await getAllProducts();
  const paths = await getProductsPaths(allProducts);

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `https://dummyjson.com/products/${context.params.id}`
  );
  const productData = await res.json();

  return {
    props: { productData },
  };
}

const Product = ({ productData }) => {
  return <h1>{productData.title}</h1>;
};

export default Product;
