import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import paymentService from '../../service/payment.service';
import ReactPaginate from 'react-paginate';

const ListPayment = () => {
  const [paymentList, setPaymentList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [paymentsPerPage] = useState(5);

  useEffect(() => {
    paymentService.getALlPayments()
      .then((res) => {
        console.log(res.data);
        setPaymentList(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log('lol');
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPayments = paymentList.filter((payment) => {
    return (
      payment.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.amount.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.paymentDate.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.method.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.status.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.orderId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.customerId.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const pageCount = Math.ceil(filteredPayments.length / paymentsPerPage);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * paymentsPerPage;
  const currentPayments = filteredPayments.slice(offset, offset + paymentsPerPage);

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
              <h1 className="h3 mb-2 text-gray-800">List Payments</h1>
              {/* Search Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Payments"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              {/* DataTales Example */}
              <div className="card shadow mb-4">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" width="100%" cellSpacing="0">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Amount</th>
                          <th>Payment Date</th>
                          <th>Method</th>
                          <th>Status</th>
                          <th>Order Id</th>
                          <th>Customer Id</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentPayments.map((payment) => (
                          <tr key={payment.id}>
                            <td>{payment.id.toString()}</td>
                            <td>{payment.amount.toString()}</td>
                            <td>{payment.paymentDate.toString()}</td>
                            <td>{payment.method.toString()}</td>
                            <td>{payment.status.toString()}</td>
                            <td>{payment.orderId.toString()}</td>
                            <td>{payment.customerId.toString()}</td>
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

export default ListPayment;
