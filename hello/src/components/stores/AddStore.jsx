import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import storeService from '../../service/store.service'

const AddStore = () => {

    const [users, setUsers] = useState([]);

    const submitStore = (e) => {
        e.preventDefault();
    }

    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState("");

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    //combobox owner
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://vinhomesecommercewebapi.azurewebsites.net/api/v1/User');
                const data = await response.json();
                const filteredUsers = data.filter(user => user.roleId === '592b006d-6335-6101-edf6-092cdb0ab5e8');
                setUsers(filteredUsers);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);




    return (
        <>
            <div id="wrapper">
                <SideBar />
                {/* Content Wrapper */}

                <div id="content-wrapper" class="d-flex flex-column">
                    {/* Main Content */}

                    <div id="content">
                        <Header />
                        <div class="container-fluid">

                            {/* Page Heading */}

                            <h1 class="h3 mb-2 text-gray-800">Add Store</h1>

                            {
                                msg && <p className='text-center text-success'>
                                    {msg}
                                </p>
                            }

                            <form onSubmit={(e) => submitStore(e)}>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Store Name</label>
                                        <input type="text" name='name'
                                            className={`form-control`} id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Description</label>
                                        <input type="text" name='description'
                                            className={`form-control`} id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Address</label>
                                        <input type="text" name='address'
                                            className={`form-control`} id="exampleInputPassword1" />
                                    </div>
                         
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Status</label>
                                        <select className="form-control" name='status'>
                                            <option value="">Select an option</option>
                                            <option value="1"> 1</option>
                                            <option value="2"> 2</option>
                                            <option value="3"> 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Store Owner</label>
                                        <select className="form-control" value={selectedValue} onChange={handleChange} name='storeOwnerId'>
                                            <option value="">Select an option</option>
                                            {users.map(user => (
                                                <option key={user.id} value={user.id}>{user.name}</option>
                                            ))}
                                        </select>
                                        <p>Selected value: {selectedValue}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Photo</label>
                                        <input type="text" name='address'
                                            className={`form-control`} id="exampleInputPassword1" />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddStore