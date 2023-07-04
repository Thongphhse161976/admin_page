import Header from '../Header'
import SideBar from '../SideBar'
import React, { useEffect, useState } from 'react'
import paymentService from '../../service/payment.service'
const ListPayment = () => {
    const [paymentList, setPaymentList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        paymentService.getALlPayments().then((res) => {
            console.log(res.data);

            setPaymentList(res.data);
        }).catch((error) => {
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

                            <h1 class="h3 mb-2 text-gray-800">List Payments</h1>

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

                                                    filteredPayments.map((payment) => (
                                                        <tr key={payment.id}>
                                                            <td>{payment.id.toString()}</td>
                                                            <td>{payment.amount.toString()}</td>
                                                            <td>{payment.paymentDate.toString()}</td>
                                                            <td>{payment.method.toString()}</td>
                                                            <td>{payment.status.toString()}</td>
                                                            <td>{payment.orderId.toString()}</td>
                                                            <td>{payment.customerId.toString()}</td>
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