import React from "react";
import "./User.css";

function Pagination({ currentPage, totalPages, paginate }) {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`pagination-button ${
            currentPage === i + 1 ? "active" : ""
          }`}
          onClick={() => paginate(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="pagination-button"
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
