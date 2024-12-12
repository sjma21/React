import { Link } from "react-router-dom";
import './Home.css'; // Import external CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Our Store</h1>
            <p className="hero-description">Discover amazing products at unbeatable prices!</p>
            <Link to="/products">
              <button className="shop-now-btn">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="featured-categories">
        <div className="container">
          <h2 className="categories-title">Featured Categories</h2>
          <div className="category-cards">
            {/* Example Category Cards */}
            <div className="category-card">
              <h3 className="category-name">Electronics</h3>
              <p className="category-description">Browse the latest gadgets and tech products.</p>
            </div>
            <div className="category-card">
              <h3 className="category-name">Fashion</h3>
              <p className="category-description">Explore trendy clothes and accessories.</p>
            </div>
            <div className="category-card">
              <h3 className="category-name">Home & Kitchen</h3>
              <p className="category-description">Find everything you need for your home.</p>
            </div>
            <div className="category-card">
              <h3 className="category-name">Beauty</h3>
              <p className="category-description">Shop the best beauty products and skincare essentials.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
