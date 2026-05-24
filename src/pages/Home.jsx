import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { productService } from '../services/productService';

function Home() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsPerPage = 8;

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const allProducts = await productService.getAllProducts();
      
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      
      const paginatedProducts = allProducts.slice(startIndex, endIndex);
      
      setProducts(paginatedProducts);
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(20 / productsPerPage);

  return (
    <div className="home">
      <h1>Products</h1>

      {error && <div className="error">❌ {error}</div>}
      
      {loading ? (
        <div className="loading">Loading...</div>
      ) : products.length === 0 ? (
        <div className="no-products">No products found</div>
      ) : (
        <>
          <div className="products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default Home;