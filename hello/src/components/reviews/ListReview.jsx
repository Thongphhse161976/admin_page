import Header from '../Header'
import SideBar from '../SideBar'
import React, { useEffect, useState } from 'react'
import reviewService from '../../service/review.service'
const ListReview = () => {
    const [reviewList, setReviewList] = useState([]);

    useEffect(() => {
        reviewService.getAllReviews().then((res) => {
            console.log(res.data);

            setReviewList(res.data);
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
                <SideBar />

                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}

                    <div id="content">
                        <Header />
                        <div class="container-fluid">

                            {/* Page Heading */}

                            <h1 class="h3 mb-2 text-gray-800">List Reviews</h1>


                            {/* DataTales Example */}

                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Store Id</th>
                                                    <th>Title</th>
                                                    <th>Content</th>
                                                    <th>Product</th>
                                                    <th>User</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    reviewList.map((e) => (
                                                        <tr>
                                                            <td key={e.id}>{e.id}</td>
                                                            <td key={e.title}>{e.title}</td>
                                                            <td key={e.content}>
                                                                <div>{e.content}</div>
                                                            </td>
                                                            <td key={e.productId}>{e.productId}</td>
                                                            <td key={e.userId}>{e.userId}</td>
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

export default ListReview