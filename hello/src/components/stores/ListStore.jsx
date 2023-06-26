import Header from '../Header'
import SideBar from '../SideBar'
import React, { useEffect, useState } from 'react'
import storeService from '../../service/store.service'
const ListStore = () => {
    const [storeList, setStoreList] = useState([]);

    useEffect(() => {
        storeService.getAllStores().then((res) => {
            console.log(res.data);

            setStoreList(res.data);
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

                            <h1 class="h3 mb-2 text-gray-800">List Stores</h1>


                            {/* DataTales Example */}

                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Store Id</th>
                                                    <th>Photo</th>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Address</th>
                                                    <th>Status</th>
                                                    <th>StoreOwnerId</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {

                                                storeList.map((e) => (
                                                        <tr>
                                                            <td><img src={e.imageUrl} alt="Store Photo" /></td>
                                                            <td key={e.id}>{e.id}</td>
                                                            <td key={e.name}>{e.name}</td>
                                                            <td key={e.description}>{e.description}</td>
                                                            <td key={e.address}>{e.address}</td>
                                                            <td key={e.status}>{e.status}</td>
                                                            <td key={e.storeOwnerId}>{e.storeOwnerId}</td>
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