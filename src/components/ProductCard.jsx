const ProductCard = ({ product }) => {
    return (
      <div className="product-card border p-4 rounded-md shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-md" />
        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
        <p className="text-lg text-gray-600 mt-2">${product.price}</p>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  