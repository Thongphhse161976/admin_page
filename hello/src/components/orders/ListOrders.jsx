import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import orderService from '../../service/order.service';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

const ListOrders = () => {
  const [orderList, setOrderList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    orderService
      .getAllOrders()
      .then((res) => {
        console.log(res.data);
        setOrderList(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log('lol');
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOrders = orderList.filter((order) => {
    return (
      order.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderDate.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderNumber.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.total.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customerId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.storeId.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };


  const pageCount = Math.ceil(filteredOrders.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredOrders.slice(offset, offset + itemsPerPage);

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
              <h1 className="h3 mb-2 text-gray-800">List Orders</h1>
              {/* Search Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Orders"
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
                          <th>Order Id</th>
                          <th>Order Date</th>
                          <th>Order Number</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Customer Id</th>
                          <th>Store Id</th>
                          <th>Detail</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.map((order) => (
                          <tr key={order.id}>
                            <td>{order.id.toString()}</td>
                            <td>{order.orderDate.toString()}</td>
                            <td>{order.orderNumber.toString()}</td>
                            <td>{order.total.toString()}</td>
                            <td>{order.status.toString()}</td>
                            <td>{order.customerId.toString()}</td>
                            <td>{order.storeId.toString()}</td>
                            <td>
                              <Link to={`/orderdetail/${order.id}`} className='btn btn-primary'>Detail</Link>
                            </td>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOrders;
