import React, { useEffect, useState } from 'react'
import Header from "../Header";
import SideBar from "../SideBar";
import userService from '../../service/user.service';
const ListUsers = () => {


    const [userList, setUserList] = useState([]);

    useEffect(() => {
        userService.getAllUsers().then((res) => {
            console.log(res.data);

            setUserList(res.data);
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

                            <h1 class="h3 mb-2 text-gray-800">List Users</h1>


                            {/* DataTales Example */}

                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>User Id</th>
                                                    <th>Photo</th>
                                                    <th>Email</th>
                                                    <th>Firebase Id</th>
                                                    <th>Status</th>
                                                    <th>Role</th>
                                                    <th>Store Id</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {

                                                    userList.map((e) => (

                                                        <tr>
                                                            <td key={e.id}>{e.id}</td>
                                                            <td><img src={e.photoUrl} alt="User Photo" /></td>
                                                            <td key={e.email}>{e.email}</td>
                                                            <td key={e.firebaseUID}>{e.firebaseUID}</td>
                                                            <td key={e.status}>{e.status}</td>
                                                            <td key={e.roleId}>{e.roleId}</td>
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

export default ListUsers