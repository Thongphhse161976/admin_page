import React, { useEffect, useState } from 'react'
import Header from "../Header";
import SideBar from "../SideBar";
import ReactPaginate from 'react-paginate';
import ratingService from '../../service/rating.service';

const ListRating = () => {
    const [ratingList, setRatingList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5);


    useEffect(() => {
        ratingService.getAllRating().then((res) => {
            console.log(res.data);
            setRatingList(res.data);
        }).catch((error) => {
            console.log(error);
            console.log('lol');
        });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredRating = ratingList.filter((rating) => {
        return (
            rating.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            rating.value.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            rating.productId.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            rating.userId.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const pageCount = Math.ceil(filteredRating.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredRating.slice(offset, offset + itemsPerPage);
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

                            <h1 class="h3 mb-2 text-gray-800">List Rating</h1>

                            {/* Search Input */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Rating"
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
                                                    <th>Id</th>
                                                    <th>Value</th>
                                                    <th>Product Id</th>
                                                    <th>User Id</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {currentItems.map((e) => (
                                                    <tr key={e.id}>
                                                        <td key={e.id}>{e.id}</td>
                                                        <td key={e.value}>{e.value}</td>
                                                        <td key={e.productId}>{e.productId}</td>
                                                        <td key={e.userId}>{e.userId}</td>
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
    )
}

export default ListRating