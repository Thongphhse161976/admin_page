import Header from '../Header'
import SideBar from '../SideBar'
import React, { useEffect, useState } from 'react'
import reviewService from '../../service/review.service'
const ListReview = () => {
    const [reviewList, setReviewList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        reviewService.getAllReviews().then((res) => {
            console.log(res.data);

            setReviewList(res.data);
        }).catch((error) => {
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

                                                    filteredReviews.map((review) => (
                                                        <tr key={review.id}>
                                                            <td>{review.id.toString()}</td>
                                                            <td>{review.title}</td>
                                                            <td>
                                                                <div>{review.content}</div>
                                                            </td>
                                                            <td>{review.productId}</td>
                                                            <td>{review.userId.toString()}</td>
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