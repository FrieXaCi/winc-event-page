// imports from libraries
import { useState } from 'react';
export const UsePagination = (initialPage, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    goToPage,
    itemsPerPage,
  };
};
