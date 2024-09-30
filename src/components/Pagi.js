import React from 'react'
import ReactPaginate from "react-paginate";


const Pagi = ({ getPage, totalPages }) => {
  const handlePageClick = (data) => {
    getPage(data.selected + 1);
  };
  return (
    <div className='pagi-style'>
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={totalPages}
      previousLabel="السابق"
      containerClassName={"pagination p-3 justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      nextClassName={"page-item"}
      breakClassName={"page-item"}
      breakLinkClassName={"page-link"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      activeClassName={"active"}
      
    />
    </div>
  );
};

export default Pagi