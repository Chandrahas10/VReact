import React from "react";

const Pagination = ({ page, nextPage, prevPage }) => {
  return (
    <div className="flex justify-center items-center gap-6 my-12">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className="px-4 py-2 rounded-full border disabled:opacity-50"
      >
        Prev
      </button>

      <span className="font-semibold text-lg">Page {page}</span>

      <button
        onClick={nextPage}
        className="px-4 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
