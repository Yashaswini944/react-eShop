import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
    }));
    alert('✓ Added to cart');
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        
        <div className="product-buttons">
          <button 
            onClick={handleViewDetails}
            className="view-details-btn"
          >
            Details
          </button>
          
          <button 
            onClick={handleAddToCart}
            className="add-to-cart-btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;