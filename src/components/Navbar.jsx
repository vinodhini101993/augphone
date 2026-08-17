import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tech Store</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;