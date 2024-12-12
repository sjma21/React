import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  // Fetch or find the product using `id`
  const product = { id, name: `Product ${id}`, price: 100 * id };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
