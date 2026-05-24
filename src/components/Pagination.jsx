function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (pageNum) => {
    onPageChange(pageNum);
  };

  const pageNumbers = [];
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button 
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        ← Prev
      </button>

      {startPage > 1 && (
        <>
          <button onClick={() => handlePageClick(1)}>1</button>
          {startPage > 2 && <span style={{ padding: '0 4px', color: '#cbd5e0' }}>...</span>}
        </>
      )}

      {pageNumbers.map(pageNum => (
        <button
          key={pageNum}
          onClick={() => handlePageClick(pageNum)}
          className={pageNum === currentPage ? 'active' : ''}
        >
          {pageNum}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span style={{ padding: '0 4px', color: '#cbd5e0' }}>...</span>}
          <button onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      <button 
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
}

export default Pagination;