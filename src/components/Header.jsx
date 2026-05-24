import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const itemCount = cartItems.length;

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>eShop</h1>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart ({itemCount})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;