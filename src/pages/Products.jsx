import ProductCard from "../components/ProductCard";
import productImage1 from "../assets/images/product1.jpg";
import productImage2 from "../assets/images/product2.jpg";

const Products = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, image: productImage1 },
    { id: 2, name: "Product 2", price: 150, image: productImage2 },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
