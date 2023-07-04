import Header from '../Header'
import SideBar from '../SideBar'
import React, { useEffect, useState } from 'react'
import storeService from '../../service/store.service'
import ReactPaginate from 'react-paginate'
const ListStore = () => {
    const [storeList, setStoreList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        storeService.getAllStores().then((res) => {
            console.log(res.data);

            setStoreList(res.data);
        }).catch((error) => {
            console.log(error);
            console.log('lol');
        });
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStores = storeList.filter((store) => {
        return (
            store.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.description.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.address.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.status.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.storeOwnerId.toString().toLowerCase().includes(searchTerm.toLowerCase())
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

                            <h1 class="h3 mb-2 text-gray-800">List Stores</h1>
                            {/* Search Input */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Stores"
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
                                                    <th>Photo</th>
                                                    <th>Store Id</th>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Address</th>
                                                    <th>Status</th>
                                                    <th>StoreOwnerId</th>
                                                    <th>Edit</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                    filteredStores.map((store) => (
                                                        <tr key={store.id}>
                                                            <td>
                                                                <img
                                                                    src={store.imageUrl}
                                                                    alt="Store Photo"
                                                                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                                                                />
                                                            </td>
                                                            <td>{store.id}</td>
                                                            <td>{store.name}</td>
                                                            <td>{store.description}</td>
                                                            <td>{store.address}</td>
                                                            <td>{store.status}</td>
                                                            <td>{store.storeOwnerId}</td>
                                                            <td></td>
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

export default ListStore