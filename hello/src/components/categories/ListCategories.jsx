import React, { useEffect, useState } from 'react'
import Header from "../Header";
import SideBar from "../SideBar";
import categoryService from '../../service/category.service';
import ReactPaginate from 'react-paginate';

const ListCategories = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);


    useEffect(() => {
        categoryService.getAllCategories().then((res) => {
            console.log(res.data);
            setCategoryList(res.data);
        }).catch((error) => {
            console.log(error);
            console.log('lol');
        });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCategories = categoryList.filter((category) => {
        return (
            category.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.description.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const pageCount = Math.ceil(filteredCategories.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;
    const currentItems = filteredCategories.slice(offset, offset + itemsPerPage);
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

                            <h1 class="h3 mb-2 text-gray-800">List Categories</h1>

                            {/* Search Input */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Category"
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
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {currentItems.map((e) => (
                                                    <tr key={e.id}>
                                                        <td key={e.id}>{e.id}</td>
                                                        <td key={e.name}>{e.name}</td>
                                                        <td key={e.description}>{e.description}</td>
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

export default ListCategories