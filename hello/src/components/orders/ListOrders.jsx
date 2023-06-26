import React, { useEffect, useState } from 'react'
import Header from "../Header";
import SideBar from "../SideBar";
import orderService from '../../service/order.service';
const ListOrders = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    orderService.getAllOrders().then((res) => {
          console.log(res.data);

          setOrderList(res.data);
      }).catch((error) => {
          console.log(error);
          console.log('lol');
      });
  }, []);


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

                                                    orderList.map((e) => (

                                                        <tr>
                                                            <td key={e.id}>{e.id}</td>
                                                            <td key={e.orderDate}>{e.orderDate}</td>
                                                            <td key={e.orderNumber}>{e.orderNumber}</td>
                                                            <td key={e.total}>{e.total}</td>
                                                            <td key={e.status}>{e.status}</td>
                                                            <td key={e.customerId}>{e.customerId}</td>
                                                            <td key={e.storeId}>{e.storeId}</td>
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