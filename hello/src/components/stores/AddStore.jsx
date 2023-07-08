import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import Header from '../Header'
import storeService from '../../service/store.service'
import userService from '../../service/user.service'

const AddStore = () => {

    const [users, setUsers] = useState([]);

    const [store, setStore] = useState({
        name: "",
        description: "",
        address: "",
        imageUrl: "",
        status: "",
        storeOwnerId: ""
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (store.name.trim() === '') {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        if (store.description.trim() === '') {
            newErrors.description = 'Description is required.';
            isValid = false;
        }

        if (store.address.trim() === '') {
            newErrors.address = 'Address is required.';
            isValid = false;
        }
        if (store.imageUrl.trim() === '') {
            newErrors.imageUrl = 'Image is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

  
    const submitStore = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Don't submit if the form is not valid
        }
        console.log(store);

        let parsedStore = {
            ...store,
            status: parseInt(store.status)
        };

        storeService.saveStore(parsedStore)
            .then((s) => {
                console.log('Store saved successfully:', s.data);
                setMsg('Store saved successfully');
            })
            .catch((error) => {
                console.error('Error saving Store:', error);
                setMsg('Error saving Store');
            });
        
    }

    const [errors, setErrors] = useState({});
    const [msg, setMsg] = useState("");

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStore({ ...store, [name]: value });
        setErrors({ ...errors, [name]: '' });
        setSelectedValue(event.target.value);
    };

    //combobox owner
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getAllUsers();
                const allUsers = response.data;

                // Filter the users based on the roleId
                const filteredUsers = allUsers.filter((user) => user.roleId === "17ae2be6-2c6a-5cab-3bcb-6f55ff55ddab");

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
                                        <input type="text" name='name' value={store.name} onChange={(e) => handleChange(e)}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''
                                        }`} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {errors.name && <p className="text-danger">{errors.name}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Description</label>
                                        <input type="text" name='description'
                                            className={`form-control ${errors.description ? 'is-invalid' : ''
                                        }`} id="exampleInputPassword1" value={store.description} onChange={(e) => handleChange(e)}/>
                                            {errors.description && <p className="text-danger">{errors.description}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Address</label>
                                        <input type="text" name='address' value={store.address} onChange={(e) => handleChange(e)}
                                            className={`form-control ${errors.address ? 'is-invalid' : ''
                                        }`} id="exampleInputPassword1" />
                                            {errors.address && <p className="text-danger">{errors.address}</p>}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Status</label>
                                        <select className="form-control" name='status' value={store.status} onChange={(e) => handleChange(e)}>
                                            <option value="">Select an option</option>
                                            <option value="1"> 1</option>
                                            <option value="2"> 2</option>
                                            <option value="3"> 3</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Store Owner</label>
                                        <select className="form-control" value={store.storeOwnerId} onChange={handleChange} name='storeOwnerId'>
                                            <option value="">Select an option</option>
                                            {users.map(user => (
                                                <option key={user.id} value={user.id}>{user.name}</option>
                                            ))}
                                        </select>
                                        <p>Selected value: {selectedValue}</p>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Photo</label>
                                        <input type="text" name='imageUrl' value={store.imageUrl} onChange={(e) => handleChange(e)}
                                            className={`form-control ${errors.imageUrl ? 'is-invalid' : ''
                                        }`} id="exampleInputPassword1" />
                                            {errors.imageUrl && <p className="text-danger">{errors.imageUrl}</p>}
                                    </div>

                                    <button type="submit" className="btn btn-success">Save</button>
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