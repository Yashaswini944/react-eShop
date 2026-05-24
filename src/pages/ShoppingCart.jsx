import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ShoppingCart() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(state => state.cart);

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
    }
  };

  return (
    <div className="shopping-cart">
      <h1>Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/" className="checkout-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-header">
              <div>Product</div>
              <div>Price</div>
              <div>Qty</div>
              <div>Total</div>
              <div>Action</div>
            </div>

            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="cart-item-title">
                    {item.title}
                  </div>
                </div>
                
                <div className="cart-price">
                  ${item.price.toFixed(2)}
                </div>
                
                <div>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                    }
                    className="quantity-input"
                  />
                </div>
                
                <div className="cart-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                <button
                  onClick={() => handleRemove(item.id)}
                  className="delete-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-total">
              <span className="total-label">Total:</span>
              <span className="summary-price">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="cart-actions">
              <Link to="/" className="continue-shopping-btn">
                Continue Shopping
              </Link>
              <Link to="/checkout" className="checkout-btn">
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
