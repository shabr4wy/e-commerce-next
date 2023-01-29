/** @format */

const ProductsList = ({ productsData }) => {
  return (
    <main>
      <ul>
        {productsData?.map((product) => (
          <li key={product.title}>{product.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsList;
