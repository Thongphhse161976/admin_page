import React, { useEffect, useState } from 'react'
import Header from "../Header";
import SideBar from "../SideBar";
import userService from '../../service/user.service';
const ListUsers = () => {


    const [userList, setUserList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        userService.getAllUsers().then((res) => {
            console.log(res.data);

            setUserList(res.data);
        }).catch((error) => {
            console.log(error);
            console.log('lol');
        });
    }, []);


    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredUsers = userList.filter((user) => {
        return (
            user.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.firebaseUID.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.status.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.roleId.toString().toLowerCase().includes(searchTerm.toLowerCase()) 
            // user.storeId.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

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

                            {/* Search Input */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Users"
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
                                                    <th>User Id</th>
                                                    <th>Photo</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Firebase Id</th>
                                                    <th>Status</th>
                                                    <th>Role</th>
                                                    <th>Store Id</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    filteredUsers.map((user) => (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>
                                                                <img src={user.photoUrl} alt="User Photo" />
                                                            </td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.firebaseUID}</td>
                                                            <td>{user.status}</td>
                                                            <td>{user.roleId}</td>
                                                            <td>{user.storeId}</td>
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