import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import reviewService from '../../service/review.service';
import ReactPaginate from 'react-paginate';

const ListReview = () => {
  const [reviewList, setReviewList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsPerPage] = useState(5);

  useEffect(() => {
    reviewService
      .getAllReviews()
      .then((res) => {
        console.log(res.data);
        setReviewList(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log('lol');
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredReviews = reviewList.filter((review) => {
    return (
      review.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.productId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.userId.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const pageCount = Math.ceil(filteredReviews.length / reviewsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * reviewsPerPage;
  const currentReviews = filteredReviews.slice(offset, offset + reviewsPerPage);

  return (
    <>
      {/* Page Wrapper */}
      <div id="wrapper">
        {/* Content Wrapper */}
        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            <Header />
            <div className="container-fluid">
              {/* Page Heading */}
              <h1 className="h3 mb-2 text-gray-800">List Reviews</h1>

              {/* Search Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Reviews"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              {/* DataTales Example */}
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="" width="100%" cellSpacing="0">
                      <thead>
                        <tr>
                          <th>Review Id</th>
                          <th>Title</th>
                          <th>Content</th>
                          <th>Product</th>
                          <th>User</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentReviews.map((review) => (
                          <tr key={review.id}>
                            <td>{review.id.toString()}</td>
                            <td>{review.title}</td>
                            <td>
                              <div>{review.content}</div>
                            </td>
                            <td>{review.productId}</td>
                            <td>{review.userId.toString()}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                activeClassName={'active'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                pageClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
              />
            </div>
            {/* /.container-fluid */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListReview;
