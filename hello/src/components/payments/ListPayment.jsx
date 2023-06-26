import Header from '../Header'
import SideBar from '../SideBar'
import React, { useEffect, useState } from 'react'
import paymentService from '../../service/payment.service'
const ListPayment = () => {
    const [paymentList, setPaymentList] = useState([]);

    useEffect(() => {
        paymentService.getALlPayments().then((res) => {
            console.log(res.data);

            setPaymentList(res.data);
        }).catch((error) => {
            console.log(error);
            console.log('lol');
        });
    }, []);

    return (
        <>
            {/* Page Wrapper */}


            <div id="wrapper">
                {/* Content Wrapper */}
                <SideBar/>

                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}

                    <div id="content">
                        <Header/>
                        <div class="container-fluid">

                            {/* Page Heading */}

                            <h1 class="h3 mb-2 text-gray-800">List Payments</h1>


                            {/* DataTales Example */}

                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Id </th>
                                                    <th>Amount</th>
                                                    <th>Payment Date</th>
                                                    <th>Method</th>
                                                    <th>Status</th>
                                                    <th>Order Id</th>
                                                    <th>Customer Id</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    paymentList.map((e) => (
                                                        <tr>
                                                            <td key={e.id}>{e.id}</td>
                                                            <td key={e.amount}>{e.amount}</td>
                                                            <td key={e.paymentDate}>{e.paymentDate}</td>
                                                            <td key={e.method}>{e.method}</td>
                                                            <td key={e.status}>{e.status}</td>
                                                            <td key={e.orderId}>{e.orderId}</td>
                                                            <td key={e.customerId}>{e.customerId}</td>
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

export default ListPayment