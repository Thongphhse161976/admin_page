import React, { useEffect, useState } from 'react'
import Header from "../Header";
import SideBar from "../SideBar";
import orderService from '../../service/order.service';
const ListOrders = () => {
  const [orderList, setOrderList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    orderService.getAllOrders().then((res) => {
      console.log(res.data);

      setOrderList(res.data);
    }).catch((error) => {
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


  return (
    <>
      {/* Page Wrapper */}

      <div id="wrapper">
        <SideBar />
        {/* Content Wrapper */}

        <div id="content-wrapper" class="d-flex flex-column">
          {/* Main Content */}

          <div id="content">
            <Header />
            <div class="container-fluid">

              {/* Page Heading */}

              <h1 class="h3 mb-2 text-gray-800">List Orders</h1>

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

              <div class="card shadow mb-4">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                      <thead>
                        <tr>
                          <th>Order Id</th>
                          <th>Order Date</th>
                          <th>Order Number</th>
                          <th>Total</th>
                          <th>Status</th>
                          <th>Customer Id</th>
                          <th>Store Id</th>

                        </tr>
                      </thead>
                      <tbody>
                        {

                          filteredOrders.map((order) => (
                            <tr key={order.id}>
                              <td>{order.id.toString()}</td>
                              <td>{order.orderDate.toString()}</td>
                              <td>{order.orderNumber.toString()}</td>
                              <td>{order.total.toString()}</td>
                              <td>{order.status.toString()}</td>
                              <td>{order.customerId.toString()}</td>
                              <td>{order.storeId.toString()}</td>
                            </tr>
                          ))

                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

            </div>
            {/* /.container-fluid */}


          </div>
        </div>
      </div>

    </>
  )
}

export default ListOrders