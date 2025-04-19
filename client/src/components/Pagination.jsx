// src/components/Pagination.jsx

import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-full text-sm font-medium transition ${
          currentPage === 1
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90 cursor-pointer"
        }`}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${
            currentPage === page
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105"
              : "bg-white text-gray-700 hover:bg-blue-200"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
          currentPage === totalPages
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:opacity-90"
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
