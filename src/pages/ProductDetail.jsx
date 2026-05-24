import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { productService } from '../services/productService';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const data = await productService.getProductById(id);
      setProduct(data);
    } catch (err) {
      setError('Failed to load product');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (product) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }));
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  if (loading) return <div className="loading">Loading product...</div>;
  if (error) return <div className="error">❌ {error}</div>;
  if (!product) return <div className="error">❌ Product not found</div>;

  return (
    <div className="product-detail">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back
      </button>
      
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>
          
          {product.rating && (
            <div className="product-rating">
              <span>⭐ {product.rating.rate}</span>
              <span>({product.rating.count})</span>
            </div>
          )}

          <div className="product-detail-price">
            ${product.price.toFixed(2)}
          </div>

          {product.category && (
            <div className="product-category">
              {product.category}
            </div>
          )}

          <div>
            <h3>Description</h3>
            <p className="product-description">
              {product.description}
            </p>
          </div>

          <div className="product-detail-actions">
            <button 
              onClick={handleAddToCart}
              className="detail-add-to-cart"
            >
              {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;