import React, { useEffect, useState } from 'react';
import Header from '../Header';
import SideBar from '../SideBar';
import orderService from '../../service/order.service';
import { useParams } from 'react-router-dom';

const OrderDetail = () => {
    const { orderId } = useParams();
    const [orderDetail, setOrderDetail] = useState([]);

    useEffect(() => {
        orderService
            .getOrderDetail(orderId)
            .then((res) => {
                console.log(res.data);
                setOrderDetail(res.data);
            })
            .catch((error) => {
                console.log(error);
                console.log('Error fetching order detail');
            });
    }, [orderId]);
    return (
        <>
            {/* Page Wrapper */}
            <div id="wrapper">
                {/* Content Wrapper */}
                <SideBar />

                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        <Header />
                        <div class="container-fluid">
                            {/* Page Heading */}
                            
                            {/* DataTales Example */}
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <p className="text-center">
                                            <h1 class="h3 mb-2 text-gray-800">Order Detail</h1>
                                        </p>
                                        {orderDetail && orderDetail.orderDetails && <div className="col-sm-6 offset-sm-3">
                                            <span>Order ID :</span>
                                            <span>{orderDetail.id}</span>
                                            <p></p>
                                            <span>Quantity :</span>
                                            <span>{orderDetail.orderDetails && orderDetail.orderDetails[0].quantity}</span>
                                            <p></p>
                                            <span>Price :</span>
                                            <span>{orderDetail.orderDetails && orderDetail.orderDetails[0].price}</span>
                                            <p></p>
                                            <span>Product Name :</span>
                                            <span>{orderDetail.orderDetails && orderDetail.orderDetails[0].productName}</span>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            {/* Pagination */}

                        </div>
                        {/* /.container-fluid */}
                    </div>
                </div>
            </div>

        </>
    );
};

export default OrderDetail;