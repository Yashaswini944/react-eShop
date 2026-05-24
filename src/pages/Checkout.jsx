import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate, Link } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(state => state.cart);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { firstName, lastName, email, address, city, zipCode, cardNumber } = formData;

    if (!firstName || !lastName || !email || !address || !city || !zipCode || !cardNumber) {
      alert('❌ Please fill in all fields');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('❌ Please enter a valid email address');
      return false;
    }

    if (cardNumber.length < 13 || cardNumber.length > 19) {
      alert('❌ Please enter a valid card number (13-19 digits)');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    setTimeout(() => {
      setOrderPlaced(true);
      dispatch(clearCart());
      setLoading(false);

      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="checkout">
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="checkout-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="checkout">
        <div className="order-success">
          <div className="success-icon">✓</div>
          <h2>Order Placed!</h2>
          <p className="order-id">Order ID: #{Math.floor(Math.random() * 100000)}</p>
          <p className="order-message">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <p className="redirect-message">
            Redirecting to home in 3 seconds...
          </p>
          <Link to="/" className="home-btn">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="checkout-wrapper">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Shipping Information</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="123 Main Street"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">Zip Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Payment Information</h3>

              <div className="form-group">
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>

              <p className="test-card-info">
                (Demo Mode) Use any 13-19 digit number for testing
              </p>
            </div>

            <button
              type="submit"
              className="place-order-btn"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </div>

        <div className="order-summary-section">
          <div className="order-summary">
            <h3>Order Summary</h3>

            <div className="summary-items">
              {items.map(item => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-info">
                    <p>{item.title}</p>
                    <p className="item-qty">Qty: {item.quantity}</p>
                  </div>
                  <p className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span className="total-label">Total:</span>
              <span className="total-amount">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <Link to="/cart" className="edit-cart-btn">
              Edit Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;