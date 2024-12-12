import { Link } from "react-router-dom";
import './Navbar.css'; // Import external CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">
          <Link to="/">E-Commerce</Link>
        </h1>
        <ul className="navbar-links">
          <li><Link to="/" className="navbar-link">Home</Link></li>
          <li><Link to="/products" className="navbar-link">Products</Link></li>
          <li><Link to="/cart" className="navbar-link">Cart</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
