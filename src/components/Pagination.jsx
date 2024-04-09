import React from "react";
import { PiCaretCircleLeftThin } from "react-icons/pi";
import { PiCaretCircleDoubleLeftThin } from "react-icons/pi";
import { PiCaretCircleDoubleRightThin } from "react-icons/pi";
import { PiCaretCircleRightThin } from "react-icons/pi";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  //   const itemsPerPage = 18;

  const handleDoubleLeftClick = () => {
    const newPage = Math.max(currentPage - 5, 1);
    handlePageChange(newPage);
  };

  const handleDoubleRightClick = () => {
    const newPage = Math.min(currentPage + 5, totalPages);
    handlePageChange(newPage);
  };

  const handleLeftClick = () => {
    const newPage = currentPage - 1;
    handlePageChange(newPage);
  };

  const handleRightClick = () => {
    const newPage = currentPage + 1;
    handlePageChange(newPage);
  };

  return (
    <div className="flex flex-wrap items-center justify-center pt-5 pl-5">
      <div className="flex items-center">
        <button
          className={`mx-1 my-1 rounded-md ${
            currentPage <= 5 ? "disabled:opacity-50" : ""
          }`}
          onClick={handleDoubleLeftClick}
          disabled={currentPage <= 5}
        >
          <PiCaretCircleDoubleLeftThin className="h-6 w-6" />
        </button>

        <button
          className={`mx-1 my-1 rounded-md ${
            currentPage === 1 ? "disabled:opacity-50" : ""
          }`}
          onClick={handleLeftClick}
          disabled={currentPage === 1}
        >
          <PiCaretCircleLeftThin className="h-6 w-6" />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`flex h-6 w-6 items-center justify-center rounded-full border-gray-400 border-2 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-600 text-white "
                : "text-gray-500 hover:bg-gray-100"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className={`mx-1 my-1 rounded-md ${
            currentPage === totalPages ? "disabled:opacity-50" : ""
          }`}
          onClick={handleRightClick}
          disabled={currentPage === totalPages}
        >
          <PiCaretCircleRightThin className="h-6 w-6" />
        </button>

        <button
          className={`mx-1 my-1++ rounded-md ${
            currentPage >= totalPages - 4 ? "disabled:opacity-50" : ""
          }`}
          onClick={handleDoubleRightClick}
          disabled={currentPage >= totalPages - 4}
        >
          <PiCaretCircleDoubleRightThin className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
